/**
 * 主方法
 * @param cssSelect css选择器
 */
function dom2canvas(cssSelect) {
   var dom = document.querySelector(cssSelect);
   var canvas = createRightSizeCanvasDom(dom);
   drawingCanvasByDom(canvas, dom);
   return new Promise(function (resolve) {
      return resolve(canvas);
   })
}

/**
 * 根据dom生成正确尺寸的canvas
 * @param dom 
 */
function createRightSizeCanvasDom(dom) {
   var width = dom.clientWidth * 2;
   var height = dom.clientHeight * 2;
   var canvas = document.createElement('canvas');
   canvas.width = width;
   canvas.height = height;
   canvas.style.zoom = 0.5;
   return canvas;
}

/**
 * 根据dom绘制canvas
 * @param canvas 
 * @param dom 
 */
function drawingCanvasByDom(canvas, dom) {
   var ctx = canvas.getContext('2d');
   drawingBg(ctx, dom);
   // 循环遍历子节点绘制
   loopChildren(ctx, dom.children, drawingNode, canvas);
}

function drawingBg(ctx, node) {
   var width = node.clientWidth * 2;
   var height = node.clientHeight * 2;
   var bgColor = getStyle(node).backgroundColor;
   ctx.fillStyle = bgColor;
   ctx.fillRect(0, 0, width, height);
}

function getStyle(node) {
   var style = document.defaultView.getComputedStyle(node);
   return style;
}

/**
 * 递归遍历子节点
 * @param ctx 
 * @param nodes 
 * @param callback 
 */
function loopChildren(ctx, nodes, callback, canvas) {
   for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      callback(ctx, node, canvas);
      if (node.children && node.children.length > 0) {
         loopChildren(ctx, node.children, callback, canvas);
      }
   }
}

/**
 * 绘制节点
 * @param ctx 
 * @param node 
 */
function drawingNode(ctx, node, canvas) {
   var offset = { x: 0, y: 0 };
   computeOffsetWithParent(offset, node);
   offset.x = offset.x * 2;
   offset.y = offset.y * 2;
   var style = getStyle(node);
   if (style.display == 'none') {
      return;
   }
   switch (node.nodeName) {
      case "IMG":
         var width = node.clientWidth * 2;
         var height = node.clientHeight * 2;
         if (node.complete) {
            ctx.drawImage(node, offset.x, offset.y, width, height);
         } else {
            node.onload = function () {
               ctx.drawImage(node, offset.x, offset.y, width, height);
            }
         }
         break;
      case "SPAN":
         if (style.display != 'inline') {
            var width = node.clientWidth * 2;
            var height = node.clientHeight * 2;
            var bgColor = style.backgroundColor;
            ctx.fillStyle = bgColor;
            ctx.fillRect(offset.x, offset.y, width, height);
            var borderColor = style.borderBottomColor;
            var borderWidth = style.borderWidth;
            if (parseFloat(borderWidth)) {
               ctx.strokeStyle = borderColor;
               ctx.lineWidth = borderWidth;
               ctx.strokeRect(offset.x, offset.y, width, height);
            }
         }
         if (node.innerText) {
            var fontStyle = style.fontStyle;
            var fontSize = style.fontSize;
            var fontWeight = style.fontWeight;
            var fontFamily = style.fontFamily;
            var color = style.color;
            var letterSpacing = style.letterSpacing;
            canvas.style.letterSpacing = letterSpacing;
            var font = (parseFloat(fontSize) * 2).toFixed(2) + 'px';
            ctx.font = fontStyle + ' ' + fontWeight + ' ' + font + ' ' + fontFamily;
            ctx.fillStyle = color;
            ctx.fillText(node.innerText, offset.x, offset.y + (parseFloat(fontSize) * 1.75));
         }
         break;
      default:
         var width = node.clientWidth * 2;
         var height = node.clientHeight * 2;
         var bgColor = style.backgroundColor;
         ctx.fillStyle = bgColor;
         ctx.fillRect(offset.x, offset.y, width, height);
         var borderColor = style.borderBottomColor;
         var borderWidth = style.borderWidth;
         if (parseFloat(borderWidth)) {
            ctx.strokeStyle = borderColor;
            ctx.lineWidth = borderWidth;
            ctx.strokeRect(offset.x, offset.y, width, height);
         }
   }
}

/**
 * 向上遍历获取坐标
 * @param offset 
 * @param node 
 */
function computeOffsetWithParent(offset, node) {
   var left = node.offsetLeft;
   var top = node.offsetTop;
   left && (offset.x += left);
   top && (offset.y += top);
   node.offsetParent && computeOffsetWithParent(offset, node.offsetParent);
}
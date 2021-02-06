app.pages[2] = (function () {

  var page = {
    init: init,
    onLoad: onLoad,
    onLeave: onLeave,
    dependingTask: 'p2',
    isFlipReady: false,
    hasBranch: true,
  };

  var p2CanvasFlag = true;

  function init() {
    initEvents();
  }

  function initEvents() {
    $('.p2-center').click(function () {
      if (p2CanvasFlag) {
        window._hmt && _hmt.push(['_trackEvent', app.store.enterType + '第二页', '点击上传按钮']);
        p2CanvasFlag = false;
        setTimeout(function () {
          p2CanvasFlag = true;
        }, 1000);
        $('.p2-btn-input').trigger('click');
      }
    });

    $('.p2-new-upload').click(function () {
      if (p2CanvasFlag) {
        window._hmt && _hmt.push(['_trackEvent', app.store.enterType + '第二页', '点击重新上传按钮']);
        p2CanvasFlag = false;
        setTimeout(function () {
          p2CanvasFlag = true;
        }, 1000);
        $('.p2-btn-input').trigger('click');
      }
    });

    $('.p2-next-btn').click(function () {
      window._hmt && _hmt.push(['_trackEvent', app.store.enterType + '第二页', '点击检测人脸按钮']);
      app.showPage(3)
      // var ajaxCheckImageSuccess = function (resp) {
      //   if(resp.code == 0){
      //     if(resp.data.face_num == 1){
      //       app.showPage(3);
      //       $('.p5-return').attr('src',resp.data.img_url);
      //       $('.p5-save-return').attr('src',resp.data.img_url);
      //     }else{
      //       app.showToast('请上传单张人脸的照片');
      //     }
      //   } else {
      //     app.showToast(resp.msg);
      //   }
      // };
      // var ajaxCheckImageError = function (resp) {
      //   app.showToast(resp.msg);
      // }

      // var sendData={
      //   image: getBase64Image(document.querySelector("#checkloadImg"))
      // }
      // app.api.ajaxCheckImage(sendData, ajaxCheckImageSuccess, ajaxCheckImageError);
    });

    // 上传图片的接口    
    $(".p2-btn-input").on("change", function (e) {
      p2CanvasFlag = true;
      var file = this.files[0];
      EXIF.getData(file, function () {
        var Orientation = EXIF.getTag(this, 'Orientation');
        if (Orientation && Orientation != 1) { //图片角度不正确
          fileFun(Orientation, file);
        } else {
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function (e) {
            // $('#uploadImg').attr('src', e.target.result);
            // $('#checkloadImg').attr('src', e.target.result);
            $("#upload").val('');
            app.store.imgUrl = e.target.result
            $(".p2-pic-content").css('background-image', 'url(' + e.target.result + ')');
            $('.p2-upload').fadeIn();
            $('.p2-choose').fadeOut();
          }
        }
      });
    });
  }

  function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var dataURL = canvas.toDataURL("image/jpeg", 0.5);
    return dataURL;
  }
  //图片处理函数
  function fileFun(Orientation, file) {
    var reader = new FileReader();
    var image = new Image();
    reader.readAsDataURL(file);
    reader.onload = function (ev) {
      image.src = ev.target.result;
      image.onload = function () {
        var imgWidth = this.width,
          imgHeight = this.height; //获取图片宽高
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext('2d');
        canvas.width = imgWidth;
        canvas.height = imgHeight;
        if (Orientation && Orientation != 1) {
          switch (Orientation) {
            case 6: // 旋转90度
              canvas.width = imgHeight;
              canvas.height = imgWidth;
              ctx.rotate(Math.PI / 2);
              ctx.drawImage(this, 0, -imgHeight, imgWidth, imgHeight);
              break;
            case 3: // 旋转180度
              ctx.rotate(Math.PI);
              ctx.drawImage(this, -imgWidth, -imgHeight, imgWidth, imgHeight);
              break;
            case 8: // 旋转-90度
              canvas.width = imgHeight;
              canvas.height = imgWidth;
              ctx.rotate(3 * Math.PI / 2);
              ctx.drawImage(this, -imgWidth, 0, imgWidth, imgHeight);
              break;
          }
        } else {
          ctx.drawImage(this, 0, 0, imgWidth, imgHeight);
        }
        var dataurl = canvas.toDataURL("image/jpeg", 0.8); //canvase 转为base64
        // $('#uploadImg').attr('src', dataurl);
        // $('#checkloadImg').attr('src', dataurl);
        $(".p2-pic-content").css('background-image', 'url(' + dataurl + ')');
        app.store.imgUrl = dataurl
        $("#upload").val('');
        $('.p2-upload').fadeIn();
        $('.p2-choose').fadeOut();
      }
    }
  }

  function onLoad() {
    setTimeout(function () {
      page.isFlipReady = true;
    }, 1000);
  }

  function onLeave() {
    page.isFlipReady = false;
    $('.p2-upload').fadeOut();
    $('.p2-choose').fadeIn();
  }

  return page;
})();
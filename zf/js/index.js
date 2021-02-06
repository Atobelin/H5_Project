/**
 * Created by Administrator on 2018/5/3 0003.
 */
$(function () {
    var dc_left = $(".previous");
    var dc_right = $(".next");
    var dc_img = $(".dc_carousel_img li");
    var dc_img_w = $(".dc_carousel_img li .img");
    var dc_point = $(".dc_carousel_point li");

    var dc_w = [],
        dc_h = [],
        dc_t = [],
        dc_l = [],
        dc_o = [],
        dc_z = []; //这里用了不少数组，其实可以存成一个对象，代码看起来会更好看一些。
    var dc_img_w_w = [],
        dc_img_w_h = [],
        dc_img_w_t = [],
        dc_img_w_l = [],
        dc_img_w_o = [],
        dc_img_w_z = [];

    function slide(flag) {
        //存样式（属性）
        dc_img.each(function (i) {
            dc_w[i] = $(this).css("width");
            dc_h[i] = $(this).css("height");
            dc_t[i] = $(this).css("top");
            dc_l[i] = $(this).css("left");
            dc_o[i] = $(this).css("opacity");
            dc_z[i] = $(this).css("zIndex");
        });
        dc_img_w.each(function (i) {
            dc_img_w_w[i] = $(this).css("width");
            dc_img_w_h[i] = $(this).css("height");
            dc_img_w_t[i] = $(this).css("top");
            dc_img_w_l[i] = $(this).css("left");
            dc_img_w_o[i] = $(this).css("opacity");
            dc_img_w_z[i] = $(this).css("zIndex");
        });
        //取样式（属性）
        dc_img.each(function (i) {
            if (flag) {
                var a = i + 1;
                a %= dc_img.length;
            } else {
                var a = i - 1;
                a < 0 ? a = dc_img.length - 1 : a;
            }
            $(this).css("zIndex", dc_z[a]).animate({
                width: dc_w[a],
                height: dc_h[a],
                left: dc_l[a],
                top: dc_t[a],
            }, 1000);
        })
        dc_img_w.each(function (i) {
            if (flag) {
                var a = i + 1;
                a %= dc_img_w.length;
            } else {
                var a = i - 1;
                a < 0 ? a = dc_img_w.length - 1 : a;
            }
            $(this).css("zIndex", dc_img_w_z[a]).animate({
                width: dc_img_w_w[a],
                opacity: dc_img_w_o[a]
            }, 400);
        })
    }
	var currentnum = 1;
    var time = setInterval(function () {
        slide(1);
		currentnum++;
		var currenttouying = currentnum % 4;
		console.log(currenttouying);
		$(".js-touying" + currenttouying).siblings('.js-touying').fadeOut(300);
		setTimeout(function(){
			$(".js-touying" + currenttouying).show();
		}, 300);
    }, 10000);
});

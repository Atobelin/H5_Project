       // -----------定义变量-----------
        var question1
        var question2
        var question3
        var text1
        var text2
        var text3
        // page-1跳转
        $(".js-go-page2").click(function () {
            $(".js-page-1").fadeOut(0)
            $(".js-page-2").fadeIn(300)
        });
        // page-2选题
        $(".answer1").click(function () {
            $(this).addClass('active')
            $(this).siblings().removeClass('active')
            question1 = $(this).attr('id')
            text1 = $(this).html();
            // console.log(text1);
            // console.log(question1);
            if (question1) {
                $(".js-page-2").fadeOut(400)
                $(".js-page-3").fadeIn(300)
            }
        });
        // page-3选题
        $(".answer2").click(function () {
            $(this).addClass('active')
            $(this).siblings().removeClass('active')
            question2 = $(this).attr('id')
            text2 = $(this).html();
            // console.log(text2);
            // console.log(question2);
            if (question2) {
                $(".js-page-3").fadeOut(400)
                $(".js-page-4").fadeIn(300)
            }
        });
        // page-4选题
        $(".answer3").click(function () {
            $(this).addClass('active')
            $(this).siblings().removeClass('active')
            question3 = $(this).attr('id')
            text3 = $(this).html();
            // console.log(text3);
            // console.log(question3);
            if (question3) {
                $(".js-page-4").fadeOut(400)
                $(".js-page-5").fadeIn(300)
                if (question1 == 4 && question2 == 7 && question3 == 12) {
                    $(".js-shuju").text("99")
                    $(".js-text1").text($("#4").html())
                    $(".js-text2").text($("#7").html())
                    $(".js-text3").text($("#12").html())
                } else if (question1 == 4 && question2 == 7 && question3 == 11) {
                    $(".js-shuju").text("95")
                    $(".js-text1").text($("#4").html())
                    $(".js-text2").text($("#7").html())
                    $(".js-text3").text($("#11").html())
                } else if (question1 == 4 && question2 == 7 && question3 == 10) {
                    $(".js-shuju").text("92")
                    $(".js-text1").text($("#4").html())
                    $(".js-text2").text($("#7").html())
                    $(".js-text3").text($("#10").html())
                } else if (question1 == 4 && question2 == 7 && question3 == 9) {
                    $(".js-shuju").text("91")
                    $(".js-text1").text($("#4").html())
                    $(".js-text2").text($("#7").html())
                    $(".js-text3").text($("#9").html())
                } else if (question1 == 4 && question2 == 6 && question3 == 11) {
                    $(".js-shuju").text("90")
                    $(".js-text1").text($("#4").html())
                    $(".js-text2").text($("#6").html())
                    $(".js-text3").text($("#11").html())
                } else if (question1 == 4 && question2 == 6 && question3 == 10) {
                    $(".js-shuju").text("89")
                    $(".js-text1").text($("#4").html())
                    $(".js-text2").text($("#6").html())
                    $(".js-text3").text($("#10").html())
                } else if (question1 == 4 && question2 == 6 && question3 == 9) {
                    $(".js-shuju").text("88")
                    $(".js-text1").text($("#4").html())
                    $(".js-text2").text($("#6").html())
                    $(".js-text3").text($("#9").html())
                } else if (question1 == 4 && question2 == 5 && question3 == 10) {
                    $(".js-shuju").text("87")
                    $(".js-text1").text($("#4").html())
                    $(".js-text2").text($("#5").html())
                    $(".js-text3").text($("#10").html())
                } else if (question1 == 4 && question2 == 5 && question3 == 9) {
                    $(".js-shuju").text("86")
                    $(".js-text1").text($("#4").html())
                    $(".js-text2").text($("#5").html())
                    $(".js-text3").text($("#9").html())
                } else if (question1 == 4 && question2 == 8 && question3 == 9) {
                    $(".js-shuju").text("85")
                    $(".js-text1").text($("#4").html())
                    $(".js-text2").text($("#8").html())
                    $(".js-text3").text($("#9").html())
                } else if (question1 == 3 && question2 == 6 && question3 == 11) {
                    $(".js-shuju").text("84")
                    $(".js-text1").text($("#3").html())
                    $(".js-text2").text($("#6").html())
                    $(".js-text3").text($("#11").html())
                } else if (question1 == 3 && question2 == 6 && question3 == 10) {
                    $(".js-shuju").text("83")
                    $(".js-text1").text($("#3").html())
                    $(".js-text2").text($("#6").html())
                    $(".js-text3").text($("#10").html())
                } else if (question1 == 3 && question2 == 6 && question3 == 9) {
                    $(".js-shuju").text("82")
                    $(".js-text1").text($("#3").html())
                    $(".js-text2").text($("#6").html())
                    $(".js-text3").text($("#9").html())
                } else if (question1 == 3 && question2 == 5 && question3 == 10) {
                    $(".js-shuju").text("81")
                    $(".js-text1").text($("#3").html())
                    $(".js-text2").text($("#5").html())
                    $(".js-text3").text($("#10").html())
                } else if (question1 == 3 && question2 == 5 && question3 == 9) {
                    $(".js-shuju").text("80")
                    $(".js-text1").text($("#3").html())
                    $(".js-text2").text($("#5").html())
                    $(".js-text3").text($("#9").html())
                } else if (question1 == 3 && question2 == 8 && question3 == 9) {
                    $(".js-shuju").text("79")
                    $(".js-text1").text($("#3").html())
                    $(".js-text2").text($("#8").html())
                    $(".js-text3").text($("#9").html())
                } else if (question1 == 2 && question2 == 5 && question3 == 10) {
                    $(".js-shuju").text("78")
                    $(".js-text1").text($("#2").html())
                    $(".js-text2").text($("#5").html())
                    $(".js-text3").text($("#10").html())
                } else if (question1 == 2 && question2 == 5 && question3 == 9) {
                    $(".js-shuju").text("77")
                    $(".js-text1").text($("#2").html())
                    $(".js-text2").text($("#5").html())
                    $(".js-text3").text($("#9").html())
                } else if (question1 == 2 && question2 == 8 && question3 == 9) {
                    $(".js-shuju").text("75")
                    $(".js-text1").text($("#2").html())
                    $(".js-text2").text($("#8").html())
                    $(".js-text3").text($("#9").html())
                } else if (question1 == 1 && question2 == 8 && question3 == 9) {
                    $(".js-shuju").text("72")
                    $(".js-text1").text($("#1").html())
                    $(".js-text2").text($("#8").html())
                    $(".js-text3").text($("#9").html())
                } else {
                    $(".js-shuju").text("77")
                    $(".js-text1").text(text1)
                    $(".js-text2").text(text2)
                    $(".js-text3").text(text3)
                }
            }
        });
        //page-5按钮跳转
        $(".js-go-page6").click(function () {
            $(".js-page-5").fadeOut(0)
            $(".js-page-6").fadeIn(300)
            var clazz = '.js-page-6';
            $(clazz).show();
            // $(".js-page-").fadeIn(300);
            setTimeout(function () {
                dom2canvas(clazz).then(function (canvas) {
                    $(".js-cover-img").attr('src', canvas.toDataURL());
                });
            }, 400);
        });
        // $(".js-button-long").click(function () {
        //    $(".js-cover-img").fadeIn(0);
        // })
        // $(".js-cover-img").click(function () {
        //    $(".js-page-6").fadeIn(300);
        //    $(".js-cover-img").fadeOut(0)
        // })
        // 重新选择刷新浏览器
        $(".js-refresh").click(function () {
            location.reload(true);
        });
        // console.log($(".js-shuju").html());

        // $(".js-shuju").text("99")
        // $(".js-text1").text($("#1").html())
        //长按保存图片
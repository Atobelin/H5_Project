<?php include  'auth.php'; ?>
<!DOCTYPE html>
<html lang="zh-cn">

	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		<meta http-equiv="X-UA-Compatible" content="UTF-8">
		<title>实现我2019年的心愿</title>
		<meta name="keywords" content="">
		<meta name="description" content="">
        <script id="fiboDataSDK" type="text/javascript" src="http://sdk.fibodata.com/data/datasdk.min.js?pfid=fiboUser&appid=awIU23iQ"> </script>
		<!-- 公共样式 -->
		<link rel="stylesheet" href="css/animate.css">
		<link rel="stylesheet" type="text/css" href="css/index.css?v=38">
		<!-- 独立样式 -->
	</head>

	<body>
		<script>
			// 自适应REM
			window.onload = function () {
				getRem(640, 100)
			};
			window.onresize = function () {
				getRem(640, 100)
			};
			getRem(640, 100);

			function getRem(pwidth, prem) {
				var html = document.getElementsByTagName("html")[0];
				var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
				html.style.fontSize = oWidth / pwidth * prem + "px";
			}
		</script>
		<img src="imgs/logo.png" alt="" class="logo">
		<img class="music animated rotatemusic infinite" src="imgs/music.png">
		<audio id="bgm" preload="auto" src="music/bgmc.mp3"></audio>
		<section class="loading" >
			<img src="imgs/page-loading-1.png" alt="" class="icon-1">
			<img src="imgs/page-loading-2.png" alt="" class="icon-2 animated loadingmove_1 infinite">  
			<img src="imgs/page-loading-3.png" alt="" class="icon-3 animated loadingmove_2 infinite">
			<img src="imgs/page-loading-4.png" alt="" class="icon-4 animated loadingmove_3 infinite">
			<img src="imgs/page-loading-5.png" alt="" class="icon-5 animated loadingmove_4 infinite">
			<div class="line-box">
				<div class="line js-line" id="percent"></div>
			</div>
		</section>
        </section>
		<section class="page-1" style="display: none;">
			<img src="imgs/page-1-bg.png" alt="" class="page-1-bg">
			<img src="imgs/page-1-title-1.png" alt="" class="title animated fadeIn du2000">
			<img src="imgs/page-1-icon-1.png" alt="" class="icon-1 animated opacity_1 infinite">
			<img src="imgs/page-1-icon-2.png" alt="" class="icon-2 animated opacity_2 infinite">
			<img src="imgs/page-1-icon-3.png" alt="" class="icon-3 animated opacity_1 infinite">
			<img src="imgs/page-1-icon-4.png" alt="" class="icon-4 animated opacity_2 infinite">
			<img src="imgs/page-1-icon-5.png" alt="" class="icon-5 animated opacity_3 infinite">
			<img src="imgs/page-1-button-1.png" alt="" class="button-1 js-go-page-2 ">
			<img src="imgs/page-1-button-2.png" alt="" class="button-2 js-go-page-4 ">
            <div class="more">点击进入美丽愿望池</div>
<!--            <img src="imgs/active-icon.png" alt="" class="active-icon animated btn-info">-->
            <div class="ruler-cover" style="display: none;">
                <div class="text-box">
                    <img src="imgs/ruler-box-1.png" alt="" class="img">
                    <div class="text">
                        <img src="imgs/textinfo-1.png" alt="" class="img">
                    </div>
                    <img src="imgs/close.png" alt="" class="close js-close">
                </div>
            </div>

		</section>
		<section class="page-2" style="display: none;">
			<img src="imgs/page-2-title.png" alt="" class="title">
			<div class="list-box js-list-box">			
			</div>
			<img src="imgs/page-2-button-1.png" alt="" class="button-1 js-change">
			<img src="imgs/page-2-button-2.png" alt="" class="button-2 js-go-page-3">
			<div>
				<div class="m-1" style="display: none">
					<img src="imgs/page-2-1-icon-1.png" alt="" class="icon-1">
					<img src="imgs/page-2-1-icon-2.png" alt="" class="icon-2">
					<img src="imgs/page-2-1-icon-3.png" alt="" class="icon-3">
					<img src="imgs/page-2-1-icon-4.png" alt="" class="icon-4 animated opacity_2 infinite">
					<img src="imgs/page-2-1-icon-5.png" alt="" class="icon-5 animated opacity_4 infinite">
					<img src="imgs/page-2-1-icon-6.png" alt="" class="icon-6 animated opacity_1 infinite">
					<img src="imgs/page-2-1-icon-7.png" alt="" class="icon-7 animated opacity_3 infinite">
				</div>
				<div class="m-2" style="display: none">
					<img src="imgs/page-2-2-icon-5.png" alt="" class="icon-5">
					<img src="imgs/page-2-2-icon-1.png" alt="" class="icon-1">
					<img src="imgs/page-2-2-icon-1.png" alt="" class="icon-2">
					<img src="imgs/page-2-2-icon-2.png" alt="" class="icon-3">
					<img src="imgs/page-2-2-icon-2.png" alt="" class="icon-4">
					<img src="imgs/page-2-2-icon-3.png" alt="" class="icon-6">
					<img src="imgs/page-2-2-icon-4.png" alt="" class="icon-7">
				</div>
				<div class="m-3" style="display: none">
					<img src="imgs/page-2-3-icon-1.png" alt="" class="icon-1">
					<img src="imgs/page-2-3-icon-2.png" alt="" class="icon-2">
					<img src="imgs/page-2-3-icon-3.png" alt="" class="icon-3">
					<img src="imgs/page-2-3-icon-4.png" alt="" class="icon-4">
					<img src="imgs/page-2-3-icon-5.png" alt="" class="icon-5 animated opacity_1 infinite"">
					<img src="imgs/page-2-3-icon-6.png" alt="" class="icon-6 animated opacity_4 infinite"">
					<img src="imgs/page-2-3-icon-6.png" alt="" class="icon-7 animated opacity_3 infinite"">
					<img src="imgs/page-2-3-icon-6.png" alt="" class="icon-8 animated opacity_4 infinite"">
				</div>
				<div class="m-4" style="display: none">
					<img src="imgs/page-2-4-icon-5.png" alt="" class="icon-5">
					<img src="imgs/page-2-4-icon-1.png" alt="" class="icon-1">
					<img src="imgs/page-2-4-icon-2.png" alt="" class="icon-2">
					<img src="imgs/page-2-4-icon-3.png" alt="" class="icon-3">
					<img src="imgs/page-2-4-icon-4.png" alt="" class="icon-4 animated opacity_4 infinite">
				</div>
				<div class="m-5">
					<img src="imgs/page-2-5-icon-1.png" alt="" class="icon-1">
					<img src="imgs/page-2-5-icon-2.png" alt="" class="icon-2">
					<img src="imgs/page-2-5-icon-3.png" alt="" class="icon-3">
					<img src="imgs/page-2-5-icon-4.png" alt="" class="icon-4 animated opacity_4 infinite">
					<img src="imgs/page-2-5-icon-5.png" alt="" class="icon-5 animated opacity_2 infinite">
					<img src="imgs/page-2-5-icon-6.png" alt="" class="icon-6 animated opacity_1 infinite">
					<img src="imgs/page-2-5-icon-7.png" alt="" class="icon-7 animated opacity_4 infinite">
				</div>				
			</div>
            <div class="ruler-cover" style="display: none;">
                <div class="text-box">
                    <img src="imgs/ruler-box-1.png" alt="" class="img">
                    <div class="text">
                        <img src="imgs/textinfo-1.png" alt="" class="img">
                    </div>
                    <img src="imgs/close.png" alt="" class="close js-close">
                </div>
            </div>
		</section>
		<section class="page-3" style="display: none;">
            <img src="imgs/page-3-text-1.png" alt="" class="text">
		</section>
		<section class="page-4" style="display: none;">
			<img src="imgs/back.png" alt="" class="back js-back">
			<div class="box">
				<div class="relative">
					<img src="imgs/page-4-icon-1.png" alt="" class="icon-1">
					<div class="line-1">
						<div class="line-1-box">
							<div class="number js-ph-mc"></div>
							<div class="text">名次</div>
						</div>
						<div class="line-1-box middle">
							<div class="img js-ph-headimg"></div>
							<div class="text js-ph-name"></div>
						</div>						
						<div class="line-1-box">
							<div class="number js-ph-rq"></div>
							<div class="text">人气榜</div>
						</div>						
					</div>
					<div class="line-2">
						<div class="text">
							<div class="text-detail js-text-detail active" style="width: 1.6rem">排行榜</div>
							<div class="text-detail js-text-detail" style="width: 2.7rem">好友助力记录</div>
						</div>
						<div class="ph-change">
							<div class="list-box js-ph-list js-list-box-0 active"></div>
							<div class="list-box js-jl-list js-list-box-1"></div>	
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="page-5" style="display: none;">
			<img src="imgs/page-5-icon-2.png" alt="" class="icon-2">
			<img src="imgs/page-5-icon-1.png" alt="" class="icon-1">
			<img src="imgs/page-5-icon-3.png" alt="" class="icon-3 animated opacity_1 infinite">
			<img src="imgs/page-5-icon-4.png" alt="" class="icon-4 animated opacity_1 infinite">
			<img src="imgs/page-1-icon-2.png" alt="" class="icon-7 animated opacity_1 infinite">
			<img src="imgs/page-1-icon-3.png" alt="" class="icon-8 animated opacity_2 infinite">
			<img src="imgs/page-1-icon-4.png" alt="" class="icon-9 animated opacity_3 infinite">
			<img src="imgs/page-1-icon-5.png" alt="" class="icon-10 animated opacity_3 infinite">
			<div class="text-1 text">你就是<span class="js-name"></span>的锦鲤</div>
			<div class="text-2 text">快助力帮Ta实现愿望</div>
			<img src="imgs/page-5-icon-5.png" alt="" class="icon-5 js-help">
			<img src="imgs/page-5-icon-7.png" alt="" class="icon-11">
			<img src="imgs/page-5-icon-6.png" alt="" class="icon-6 js-go-index">
            <div class="cover-box">
                <img src="imgs/tan-box-1.png" alt="" class="tan-box">
                <img src="imgs/3.png" alt="" class="number number-3">
                <img src="imgs/2.png" alt="" class="number number-2">
                <img src="imgs/1.png" alt="" class="number number-1">
            </div>
        </section>

		<!-- 公共JS -->
		<script src="https://cdn.bootcss.com/jquery/1.11.0/jquery.min.js"></script>		
		<script src="https://cdn.bootcss.com/layer/2.3/layer.js"></script>
        <script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
        <script src="js/base64.js?v=14"></script>
        <script src="js/share.js?v=15"></script>
		<script>
            var zl_nickname = "<?php echo $zl_nickname;?>";
            var zl_openid = "<?php echo $zl_openid;?>";
            var init = 0;
			$(function() {
				// 授权
				var openid = "<?php echo $userinfo['openid'];?>";
				var nickname = "<?php echo $userinfo['nickname'];?>";
				var headimg = "<?php echo $userinfo['headimgurl'];?>";

                sessionStorage.setItem('mzl_nickname', '');
                sessionStorage.setItem('mzl_openid', '');
                sessionStorage.setItem('title', '我有点飘了，2019年的flag竟然这么快实现了');
                sessionStorage.setItem('desc', '帮我助力，你还能赢iPad大奖哦！');
                // initShar();
				// 保存用户信息
				$.ajax({
						url: 'http://api.hongyu.ren/meilai/save',
						type: 'post',
						data: {
							openid:openid,
							nickname:nickname,
							headimg:headimg
						},
						success: function(res) {
							console.log(res);		
							// 加载loading
                            init = res.data.init
							perFun();																
						},
						error: function(data) {
							console.log('请求超时');
						}
				})								
				// 播放音乐
				audioAutoPlay();
				$(".music").click(function() {
					var audio = document.getElementById('bgm');
					if (audio.paused) {
						audio.play();
						$(this).addClass('rotatemusic');
					} else {
						audio.pause();
						$(this).removeClass('rotatemusic');
					}
				});		
				// 去愿望助力榜
				$(".js-go-page-4").click(function() {
					$.ajax({
						url: 'http://api.hongyu.ren/meilai/rank',
						type: 'post',
						data: {
							openid:openid
						},
						success: function(res) {
							console.log(res);
							var rank = res.data.rank 
							var count = res.data.count
							var head = '<img src="'+headimg+'" alt="">'
                            $(".js-ph-mc").text(rank)
							$(".js-ph-rq").text(count)
							$(".js-ph-name").text(nickname)
							$(".js-ph-headimg").html(head)
                            $(".js-ph-list").text("")
							for(var k = 0;k<res.data.list.length;k++){
								var number = k+1
								var html_box = $('<div class="list">\
								<div class="img-box">\
									<div class="mc js-mc"><span>'+number+'</span></div>\
									<div class="img"><img src="'+res.data.list[k].headimg+'" alt=""></div>\
								</div>\
								<div class="name">'+res.data.list[k].nickname+'</div>\
								<div class="number">'+res.data.list[k].count+'</div>\
							</div>').appendTo('.js-ph-list')	
								if (number == 1) {
									html_box.find(".js-mc").append('<img src="imgs/page-4-icon-2.png" alt="">')
								}else if (number == 2) {
									html_box.find(".js-mc").append('<img src="imgs/page-4-icon-3.png" alt="">')
								}else if (number == 3) {
									html_box.find(".js-mc").append('<img src="imgs/page-4-icon-4.png" alt="">')
								}
							}	
							$.ajax({
								url: 'http://api.hongyu.ren/meilai/helps',
								type: 'post',
								data: {
									openid:openid
								},
								success: function(res) {
									console.log(res);
                                    $(".js-jl-list").text("")
									for(var i = 0;i<res.data.list.length;i++){
										var html = $('<div class="list">\
										<div class="img-box">\
											<div class="img"><img src="'+res.data.list[i].headimg+'" alt=""></div>\
										</div>\
										<div class="name">'+res.data.list[i].nickname+'</div>\
										<div class="number">'+res.data.list[i].create_time+'</div>\
									</div>').appendTo('.js-jl-list')							
									}								
									$(".page-1").fadeOut(0)
									$(".page-4").fadeIn(300)											
								},
								error: function(data) {
									console.log('请求超时');
								}
							})																	
						},
						error: function(data) {
							console.log('请求超时');
						}
					})						
				});	
				// 排行榜点击切换
				$(".js-text-detail").click(function() {
					var index = $('.js-text-detail').index(this)
					$(this).addClass('active')
					$(this).siblings().removeClass('active')
					$(".js-list-box-"+index).addClass('active')
					$(".js-list-box-"+index).siblings().removeClass('active')
				});						
				// 返回按钮
				$(".js-back").click(function() {
					$(".page-4").fadeOut(0)
					$(".page-1").fadeIn(300)
				});	
				// 去许愿页面
				$(".js-go-page-2").click(function() {
					$.ajax({
						url: 'http://api.hongyu.ren/meilai/wishs',
						type: 'post',
						data: {

						},
						success: function(res) {
							console.log(res);
							var data = res.data.list 
							// console.log(data);
							var result = split_arrat(data,4)
							// debugger;
							function split_arrat(arr,len){
								var a_len = arr.length
								var result = []
								for(var i=0;i<a_len;i+=len){
									result.push(arr.slice(i,i+len))
								}
								return result
							}
							console.log(result);
							for(var k = 0;k<result.length;k++){
								var html_box = $('<div class="js-box" id="movie'+k+'"></div>').appendTo('.js-list-box')
								for (var i = 0; i < result[k].length; i++) {
									var id = result[k][i].id
									var content = result[k][i].content
									var key = result[k][i].id
									html = ' <div class="list js-list" data-id="'+id+'"><div class="box"><img src="imgs/page-2-yes.png" alt="" class="yes"></div><div class="text">'+content+'</div></div>'
									html_box.append(html)
									// console.log(i);
								}								
							}	
							$("#movie0").fadeIn(0)
							$(".page-1").fadeOut(0)
							$(".page-2").fadeIn(300)
                            $(".ruler-cover").fadeIn(300)
						},
						error: function(data) {
							console.log('请求超时');
						}
					})					
				});	
				// 点击答题
				$(document).on("click", ".js-list", function () {
                    var results=[]
                    for(var i=0;i<$(".js-list.active").length;i++){
                        var result=$($(".js-list.active")[i]).data("id")
                        results.push(result)
                    }

				　　if ($(this).hasClass('active')) {
						$(this).removeClass('active')
					}else{
                        if (results.length>7) {
                            layer.msg("别贪心哦，8个妥妥够了~");
                            return
                        }
						$(this).addClass('active')
					}
				});
				// 换一批
				var currentShow = 0
				var bgShow = 1
				$(".js-change").click(function() {
					var box_length = $(".js-box").length-1
					// console.log(box_length);
					currentShow = currentShow==box_length?0:currentShow+1
					$("#movie"+currentShow).siblings().hide()
					$("#movie"+currentShow).show()
					bgShow = bgShow==5?1:bgShow+1
					$(".m-"+bgShow).siblings().hide()
					$(".m-"+bgShow).show()					
				});

                $(".js-close").click(function() {
                    $(".ruler-cover").fadeOut(0)
                });

                $(".btn-info").click(function() {
                    $(".ruler-cover").fadeIn(300)
                });

                $(".more").click(function() {
                    window.location.href = "https://h5.youzan.com/v2/feature/Y0dcoah3cG"
                });

                // 一键助力
                $(".js-help").click(function() {
                    $.ajax({
                        url: 'http://api.hongyu.ren/meilai/help',
                        type: 'post',
                        data: {
                            openid:zl_openid,
                            openid_h:openid
                        },
                        success: function(res) {
                            if (res.status==100) {
                                //layer.msg(res.data.msg);
                                $(".cover-box").fadeIn(0)
                                setTimeout(function(){
                                    $(".number-3").fadeOut(0)
                                    $(".number-2").fadeIn(300)
                                },1000);
                                setTimeout(function(){
                                    $(".number-2").fadeOut(0)
                                    $(".number-1").fadeIn(300)
                                },2000);
                                setTimeout(function(){
                                    location.href = "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5MjQwOTI0MA==&scene=126&bizpsid=1549856942&sessionid=1549856942&subscene=0#wechat_redirect";
                                    $(".cover-box").fadeOut(0)
                                },3000);
                            }else{
                                layer.msg(res.data.err_msg);
                            }
                        },
                        error: function(data) {
                            layer.msg('请求超时');
                        }
                    })
                });
                // 我也想许愿
                $(".js-go-index").click(function() {
                    $(".page-6").fadeOut(0)
                    $(".page-1").fadeIn(300)
                    // if (init == 1) {
                    //     $(".ruler-cover").fadeIn(300)
                    // }
                });

                // 进去结果页
				$(".js-go-page-3").click(function() {
					var results=[]
					for(var i=0;i<$(".js-list.active").length;i++){
						var result=$($(".js-list.active")[i]).data("id")
						results.push(result)
					}
					var resultstr=results.join('-')
					if (results.length<1) {
						layer.msg("请选择你的愿望！");
					}else if (results.length>8) {
						layer.msg("愿望不能超过8条！");
					}else{
						$.ajax({
							url: 'http://api.hongyu.ren/meilai/wish',
							type: 'post',
							data: {
								openid:openid,
								wishs:resultstr,
								w:document.body.clientWidth,
								h:document.body.clientHeight
							},
							success: function(res) {
								if (res.status == 100) {
									$(".page-3").append('<img src="'+res.data.url+'" alt="" class="result-img">')
									$(".page-2").fadeOut(0)
									$(".page-3").fadeIn(300)
                                    var b = new Base64();
                                    sessionStorage.setItem('mzl_nickname', b.encode(nickname));
                                    sessionStorage.setItem('mzl_openid', openid);
                                    sessionStorage.setItem('title', '这是'+nickname+'的心愿，帮Ta实现，还能抽iPad!');
                                    sessionStorage.setItem('desc', 'Ta许的都是些什么愿望啊，这么奇葩！');
                                    initShar();
								}else{
									layer.msg(res.data.err_msg);
								}					
							},
							error: function(data) {
								console.log('请求超时');
							}
						})	
					}
				});																
			})			

			

			function perFun() {
				var imgs = document.getElementsByTagName("img");
				var len = 0;
				var percent = document.getElementById("percent");
				var imgLength = imgs.length - 1
				for (var i = 0; i < imgs.length; i++) {
					if (imgs[i].complete) {
						len++;
						document.getElementById("percent").style.width = Math.round(len * 100 / imgs.length) + "%"
						// console.log(len)
						// 跳转到首页
						if (len == imgLength) {
							$(".loading").fadeOut(0)
                            if (zl_openid == '') {
                                $(".page-1").fadeIn(300)
                                // if (init == 1) {
                                //     $(".ruler-cover").fadeIn(300)
                                // }
                            } else {
                                $(".js-name").append(zl_nickname)
                                $(".page-5").fadeIn(300)
                            }
						}
					} else {
						imgs[i].onload = function() {
							len++;
							document.getElementById("percent").style.width = Math.round(len * 100 / imgs.length) + "%"
							// console.log(len)
							// 跳转到首页
							if (len == imgLength) {
								$(".loading").fadeOut(0)
                                if (zl_openid == '') {
                                    $(".page-1").fadeIn(300)
                                    // if (init == 1) {
                                    //     $(".ruler-cover").fadeIn(300)
                                    // }
                                } else {
                                    $(".js-name").append(zl_nickname)
                                    $(".page-5").fadeIn(300)
                                }
							}
						}
					}
				}
			}


			function audioAutoPlay() {
				var audio = document.getElementById('bgm');
				audio.play();
				document.addEventListener("WeixinJSBridgeReady", function() {
					audio.play();
				}, false);
				audio.onended = function() {
					audio.currentTime = 0
					audio.play();
				}
			}							
						
		</script>


	</body>	
</html>

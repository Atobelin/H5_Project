$(function() {
	// canvas loading
	var width = $(".loadingcanvas").width();
	console.log(width)
	$("#loadingCanvas").attr("width", width);
	$("#loadingCanvas").attr("height", width);
	function G_canvas(id)
	{
	    this.canvas = document.getElementById(id);
	    this.cxt = this.canvas.getContext("2d");
	    this.width = this.canvas.width-0;
	    this.height = this.canvas.height-0;
	    this.loading = function(i)            //渲染loading
	    {
	        this.cxt.strokeStyle = "#03b5ff";
	        this.cxt.fillStyle = "rgba(255, 255, 255, 0)";
	        this.cxt.lineWidth = width/12;
	        this.cxt.beginPath();
	        this.cxt.arc(width/2,width/2,width/2.2,0,2*Math.PI,false);
	        this.cxt.closePath();
	        this.cxt.fill();
	        this.cxt.stroke();
	        this.cxt.strokeStyle = "#01a8cc";
	        this.cxt.lineWidth = width/12;
	        this.cxt.beginPath();
	        this.cxt.arc(width/2,width/2,width/2.2,-0.5*Math.PI,2*Math.PI*(i-0.25),false);
	        this.cxt.stroke();
	    }
	    this.start = function (i) {
	        this.loading(i)
	        if (i<1)
	            setTimeout(this.start.bind(this,i+0.01), 50);
	    }
	}
	var g = new G_canvas("loadingCanvas");
	g.start(0)
	// loading数字滚动
	var percent_number_step = $.animateNumber.numberStepFactories.append('%')
	$('#target').animateNumber(
	  {
	    number: 100,
	    numberStep: percent_number_step
	  },
	  5000
	);	
	// loading页面消失
	setTimeout(function(){
		$(".loading").fadeOut()
		$(".page1").fadeIn()
	},5100)

	// 脸型结果
	var results =[
		"中东土豪脸",
		"加薪不加班脸",
		"水逆绝缘脸",
		"母胎solo脸",
		"瘦子吃货脸",
		"全能明星脸",
		"霸道总攻脸"
	]
	var result1 = parseInt(Math.random() * results.length);
	$(".js-face-result").text(results[result1])
	// console.log(results[result1]);
	 

	// input
	$("#nameinput").on("input", function(){
		$(".pleaseinput").removeClass("animated fadeIn delay3000");
		if(this.value.length > 0){
			$(".pleaseinput").css("opacity","0");
		}else{
			$(".pleaseinput").css("opacity","1");
		}
	});

	// 上传照片
	$(".js-inputPhone").click(function() {
		if ($("#nameinput").val() == "") {
			$(".js-tan-name").fadeIn(500)
		}else{
			$("#cameraInput").trigger('click');	
		}
	});

	$(".js-tan-box").click(function() {
		$(this).fadeOut(500)
	});
	// 选择图片
	$("#cameraInput").on("change",function(){
			var filePath = this.files[0];
			var reader = new FileReader();
			reader.readAsDataURL(filePath);
			reader.onload = function (e) {
			var name = $("#nameinput").val()
			$("#result_name").text(name)
			$("#pic").attr("src", this.result);
			$("#pic_result").attr("src", this.result);
			$(".js-tan").fadeIn(500)
			setTimeout(function(){
				$(".js-tan").fadeOut(500)
				$(".page1").fadeOut(500)
				$(".page2").fadeIn(500)
				// 代码滚动
				$('#marquee6').kxbdSuperMarquee({
					isMarquee:true,
					isEqual:false,
					scrollDelay:50,
					direction:'up'
				});	
				// 随机抽取两句话 
				var strs = [
					"真是一张百年不遇的高级脸", 
					"你笑起来，没人能抵抗得了", 
					"刷脸吃饭，说的就是你吧", 
					"ISO9000官方高颜值认证", 
					"国际脸孔，世界通用", 
					"自带VIP，去哪都专机", 
					"今年你的财运要爆发", 
					"你脱发几率较大，请提前护发",
					"正在生成你的颜值属性研究报告"
				];
				shuffle(strs);
				$('.js-result-text div:first-child').html("<p>系统正在扫描输入</p><p>正在调用脸部大数据</p><p>" + strs[1] + "</p><p>" + strs[2] + "</p>");
				$('.js-result-text div:last-child').html("<p>系统正在扫描输入</p><p>正在调用脸部大数据</p><p>" + strs[3] + "</p><p>" + strs[4] + "</p>");
				var scroll = 0;
				setInterval(function(){
					scroll++;
					$(".js-result-text").scrollTop(scroll);
						if(scroll == 100){
						scroll = 0;
						shuffle(strs);
						$('.js-result-text div:first-child').remove();
						$('.js-result-text').append("<div><p>系统正在扫描输入</p><p>正在调用脸部大数据</p><p>" + strs[1] + "</p><p>" + strs[2] + "</p></div>");
					}
				},12);
				function shuffle(arr) { 
					var i = arr.length, t, j; 
					while (i) { 
					j = Math.floor(Math.random() * i--); //!!!
					t = arr[i]; 
					arr[i] = arr[j]; 
					arr[j] = t; 
					} 
				} 		
				// 跳转页面
				setTimeout(function(){
					$(".saomiao-line").fadeOut()
					$(".page2").fadeOut(500)
					$(".page3").fadeIn(500)
				},12000)		
			},3000)
		}

	});


})
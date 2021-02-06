// loading
perFun()
// 百度地图API功能
var map = new BMap.Map("demo");
var point = new BMap.Point(108.95, 34.27); //地图初始中心点，加载地图定位点
map.centerAndZoom(point, 12);


var geolocation = new BMap.Geolocation();
var gc = new BMap.Geocoder();
geolocation.getCurrentPosition(function (r) { //定位结果对象会传递给r变量  

   if (this.getStatus() == BMAP_STATUS_SUCCESS) { //通过Geolocation类的getStatus()可以判断是否成功定位。  
      var pt = r.point;
      map.panTo(pt); //移动地图中心点
      //alert(r.point.lng);//X轴
      //alert(r.point.lat);//Y轴 
      //返回详细位置，例如[上海市]
      //gc.getLocation(pt, function(rs){    
      //    var addComp = rs.addressComponents;
      //    alert(addComp.city);
      //alert(addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber);    
      //});  
      console.log(pt)
      lng = pt.lng;
      lat = pt.lat;
      // lng = '121.345425896217';
      // lat = '30.72159862887';
      shopRecommend(lng, lat)
      // alert(pt)
   } else {
      //关于状态码    
      //BMAP_STATUS_SUCCESS   检索成功。对应数值“0”。    
      //BMAP_STATUS_CITY_LIST 城市列表。对应数值“1”。    
      //BMAP_STATUS_UNKNOWN_LOCATION  位置结果未知。对应数值“2”。    
      //BMAP_STATUS_UNKNOWN_ROUTE 导航结果未知。对应数值“3”。    
      //BMAP_STATUS_INVALID_KEY   非法密钥。对应数值“4”。    
      //BMAP_STATUS_INVALID_REQUEST   非法请求。对应数值“5”。    
      //BMAP_STATUS_PERMISSION_DENIED 没有权限。对应数值“6”。(自 1.1 新增)    
      //BMAP_STATUS_SERVICE_UNAVAILABLE   服务不可用。对应数值“7”。(自 1.1 新增)    
      //BMAP_STATUS_TIMEOUT   超时。对应数值“8”。(自 1.1 新增)    
      switch (this.getStatus()) {
         case 2:
            layer.msg('位置结果未知 获取位置失败.');
            break;
         case 3:
            layer.msg('导航结果未知 获取位置失败..');
            break;
         case 4:
            layer.msg('非法密钥 获取位置失败.');
            break;
         case 5:
            layer.msg('对不起,非法请求位置  获取位置失败.');
            break;
         case 6:
            layer.msg('对不起,当前 没有权限 获取位置失败.');
            break;
         case 7:
            layer.msg('对不起,服务不可用 获取位置失败.');
            break;
         case 8:
            layer.msg('对不起,请求超时 获取位置失败.');
            break;

      }
   }

}, {
   enableHighAccuracy: true
})
// 获取经纬度
// var map = new AMap.Map('container', {
//    resizeEnable: true
// })
// var lng;
// var lat;

function perFun() {
   var imgs = document.getElementsByTagName("img");
   var len = 0;
   var percent = document.getElementById("percent");
   var percentI = document.getElementById("percentI");
   var imgLength = imgs.length - 1
   for (var i = 0; i < imgs.length; i++) {
      if (imgs[i].complete) {
         len++;
         document.getElementById("percent").style.width = Math.round(len * 100 / imgs.length) + "%"
         // document.getElementById("percentI").style.left = Math.round(len * 100 / imgs.length) + "%"
         // console.log(len)
         // 跳转到首页
         if (len == imgLength) {
            $(".page-loading").fadeOut(0)
            $(".js-page-1").fadeIn(300)
         }
      } else {
         imgs[i].onload = function () {
            len++;
            document.getElementById("percent").style.width = Math.round(len * 100 / imgs.length) + "%"
            // document.getElementById("percentI").style.left = Math.round(len * 100 / imgs.length) + "%"
            // console.log(len)
            // 跳转到首页
            if (len == imgLength) {
               $(".page-loading").fadeOut(0)
               $(".js-page-1").fadeIn(300)
            }
         }
      }
   }
}
// map.plugin('AMap.Geolocation', function () {
//    var geolocation = new AMap.Geolocation({
//       // 是否使用高精度定位，默认：true
//       enableHighAccuracy: true,
//       // 设置定位超时时间，默认：无穷大
//       timeout: 10000,
//       // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
//       buttonOffset: new AMap.Pixel(10, 20),
//       //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
//       zoomToAccuracy: true,
//       //  定位按钮的排放位置,  RB表示右下
//       buttonPosition: 'RB'
//    })
//    geolocation.getCurrentPosition()
//    AMap.event.addListener(geolocation, 'complete', onComplete)
//    AMap.event.addListener(geolocation, 'error', onError)

//    function onComplete(data) {
//       lng = data.position.lng;
//       lat = data.position.lat;
//       // lng = '121.345425896217';
//       // lat = '30.72159862887';
//       shopRecommend(lng, lat)
//    }

//    function onError(data) {
//       // 定位出错
//       layer.msg('获取位置信息错误')
//    }
// })
// 获取门店
function shopRecommend(lng, lat) {
   $.ajax({
      url: 'https://vivo.songjiang.xyz/shop/shop/all_shop_recommend',
      type: 'get',
      data: {
         num: 5,
         longitude: lng,
         latitude: lat
      },
      success: function (res) {
         // console.log(res.data.data)
         getMoreStorList(res)
      },
      error: function (data) {
         console.log(data);
      }
   })
}

function getMoreStorList(res) {
   // console.log(res.data.data)
   var storArry = []
   for (var k = 0; k < res.data.data.length; k++) {
      storArry.push(
         '<div class="list"><img src="imgs/page-2/14.png" alt="" class="img"><div class="title">' +
         res.data.data[k].shop_name + '</div><div class="place">' + res.data.data[k]
         .shop_address + '</div><img id="' + res.data.data[k].shop_id +
         '" src="imgs/page-2/15.png" alt="" class="button js-go-page-3"></div>')
   }
   $(".js-storList").html(storArry)
   $(".js-go-page-3").click(function () {
      $.ajax({
         url: 'https://vivo.songjiang.xyz/shop/shop/check_shop_form',
         type: 'get',
         data: {
            shop_id: $(this).attr('id')
         },
         success: function (res) {
            // console.log(res)
            token = res.token
            shop_id = res.data.shop_id
            $("#storName").val(res.data.shop_name)
            $("#storPlace").text(res.data.shop_address)
            $("#storTel").val(res.data.shop_tel)
            $("#storJW").val(res.data.shop_latitude + ':' + res.data
               .shop_longitude)
            $(".js-page-2").fadeOut(0)
            $(".js-page-3").fadeIn(0)
         },
         error: function (data) {
            console.log(data);
         }
      })
   })
}
// -------------page-1
$(".js-go-page-2").click(function () {
   $(".js-page-1").fadeOut(0)
   $(".js-page-2").fadeIn(0)
   // 行政区划获取
   $.ajax({
      url: 'https://vivo.songjiang.xyz/shop/shop/city',
      type: 'get',
      data: {
         parent_id: 0
      },
      success: function (res) {
         console.log(res)
         var shengArry = []
         shengArry.push('<option id="">省</option>')
         for (var i = 0; i < res.data.length; i++) {
            shengArry.push('<option ' + 'id="' + res.data[i].city_id + '"' + '>' + res.data[i]
               .city_name + '</option>')
         }
         $(".js-sheng-select").html(shengArry)
      },
      error: function (data) {
         console.log(data);
      }
   })
})
// --------------page-2
// select选择 
var token
var shop_id
var valueSheng
var textShi
var valueShi
var textQu
var valueQu
$(".js-sheng-select").change(function (data) {
   // $(".js-tip").fadeOut(0)
   valueSheng = data.target.selectedOptions[0].id
   if (valueSheng == '') {
      return
   } else {
      $.ajax({
         url: 'https://vivo.songjiang.xyz/shop/shop/city',
         type: 'get',
         data: {
            parent_id: valueSheng
         },
         success: function (res) {
            console.log(res)
            var shiArry = []
            shiArry.push('<option id="">市</option>')
            for (var i = 0; i < res.data.length; i++) {
               shiArry.push('<option ' + 'id="' + res.data[i].city_id + '"' + '>' + res.data[i]
                  .city_name + '</option>')
            }
            $(".js-shi-select").html(shiArry)
         },
         error: function (data) {
            console.log(data);
         }
      })
   }
});
$(".js-shi-select").change(function (data) {
   // $(".js-tip").fadeOut(0)
   valueShi = data.target.selectedOptions[0].id
   if (valueShi == '') {
      return
   } else {
      $.ajax({
         url: 'https://vivo.songjiang.xyz/shop/shop/city',
         type: 'get',
         data: {
            parent_id: valueShi
         },
         success: function (res) {
            console.log(res)
            var quArry = []
            quArry.push('<option id="">区/县</option>')
            for (var i = 0; i < res.data.length; i++) {
               quArry.push('<option ' + 'id="' + res.data[i].city_id + '"' + '>' + res.data[i]
                  .city_name + '</option>')
            }
            // alert(quArry)
            $(".js-qu-select").html(quArry)
         },
         error: function (data) {
            console.log(data);
         }
      })
   }
});
$(".js-qu-select").change(function (data) {
   // $(".js-tip").fadeOut(0)
   valueQu = data.target.selectedOptions[0].id
   // 获取店铺列表
   if (valueQu == '') {
      return
   } else {
      $.ajax({
         url: 'https://vivo.songjiang.xyz/shop/shop/shop_list',
         type: 'get',
         data: {
            rank1_city_id: valueSheng,
            rank2_city_id: valueShi,
            rank3_city_id: valueQu,
            shop_status: 0,
         },
         success: function (res) {
            // console.log(res.data.data)
            getMoreStorList(res)
         },
         error: function (data) {
            console.log(data);
         }
      })
   }
});
// select动画
$(".select").focus(function () {
   $(this).parent().find(".js-img-9").addClass("rotate");
})
$(".select").blur(function () {
   $(this).parent().find(".js-img-9").removeClass("rotate");
})
$(".select").change(function () {
   $(this).parent().find(".js-img-9").removeClass("rotate");
})
// 门店礼遇内容
var rewards = []
var type = ''
var desc = ''
// ---------------page-3
// 删除数组指定内容
Array.prototype.remove = function (val) {
   var index = this.indexOf(val);
   if (index > -1) {
      this.splice(index, 1);
   }
}
$(".js-go-page-4").click(function () {
   // if ($("#storNum").val() == '') {
   //    layer.msg('请填写门店编号！')
   // }
   $.ajax({
      url: 'https://vivo.songjiang.xyz/shop/shop/check_shop_code',
      type: 'post',
      data: {
         shop_id: shop_id,
         token: token,
         shop_code: $("#storNum").val()
      },
      success: function (res) {
         console.log(res)
         if (res.code == 1) {
            var giftArryBox = []
            // console.log(res.data.reward_type)
            for (var i in res.data.reward_type) {
               giftArryBox.push(res.data.reward_type[i]);
            }
            var giftArry = []
            for (var z = 0; z < giftArryBox.length; z++) {
               giftArry.push('<div class="list js-list" id="' + giftArryBox[z].type_id +
                  '"id-text="' + giftArryBox[z].type_name +
                  '"><div class="check-box"><img src="imgs/page-4/13.png" alt="" class="img"><img src="imgs/page-4/14.png" alt="" class="img-active"></div><span>' +
                  giftArryBox[z].type_name + '</span></div>')
            }
            $(".js-gift-list").html(giftArry)
            $(".js-list").click(function () {
               type = $(this).attr('id')
               if ($(this).find('.img-active').hasClass("active")) {
                  $(this).find('.img-active').removeClass("active")
                  // 移除选中的内容
                  for (var m = 0; m < rewards.length; m++) {
                     // console.log(m)
                     // console.log(type)
                     // console.log(rewards[m])
                     // console.log(JSON.parse(rewards[m]).type)
                     if (type == JSON.parse(rewards[m]).type) {
                        rewards.remove(rewards[m])
                     }
                  }
                  console.log(rewards)
               } else {
                  $(this).find('.img-active').addClass("active")
                  $(".js-tan-bg").fadeIn()
                  $(".js-text-title").html($(this).attr('id-text'))
                  $('.js-gift-input').val('')
               }
            })
            $(".js-page-3").fadeOut(0)
            $(".js-page-4").fadeIn(0)
         } else if (res.code == 0) {
            layer.msg("请填写正确门店编码！")
         } else {
            layer.msg(res.message)
         }
      },
      error: function (data) {
         console.log(data);
      }
   })
})
// ---------------page4
$(".js-go-page-5").click(function () {
   if (rewards.length < 1) {
      layer.msg('请选择门店礼遇类目！')
   } else {
      console.log(rewards)
      layer.load(1)
      $.ajax({
         url: 'https://vivo.songjiang.xyz/shop/shop/bind_shop_reward',
         type: 'post',
         dataType: 'JSON',
         data: {
            shop_id: shop_id,
            token: token,
            rewards: rewards
         },
         success: function (res) {
            console.log(res)
            //alert(res)
            $(".js-page-4").fadeOut(0)
            $(".js-page-5").fadeIn(0)
            // 返回url
            layer.closeAll('loading')
            layer.msg('长按保存图片！')
            $(".js-page-5").html('<img src="' + res.data.card_path + '" alt="" class="card">')
         },
         error: function (data) {
            //alert(data)
            layer.closeAll('loading')
            layer.msg(data)
         }
      })
   }
})
// 弹框确认
$(".js-save-page-4-tan-box").click(function () {
   $(".js-tan-bg").fadeOut()
   desc = $('.js-gift-input').val()
   rewards.push('{"type":' + type + ',"desc":"' + desc + '"}')
   console.log(rewards)
})
// 弹框关闭
$(".js-close-page-4-tan-box").click(function () {
   $(".js-tan-bg").fadeOut()
   // console.log($(".js-list")[data = type - 1])
   $($(".js-list")[data = type - 1]).find('.img-active').removeClass("active")
   type = ''
   desc = ''
})

$("input").blur(function () {
   setTimeout(function () {
      var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
      window.scrollTo(0, Math.max(scrollHeight - 1, 0));
   }, 300);
})
// 返回第二页
$(".js-go-back-page-2").click(function () {
   $(".js-page-3").fadeOut()
   $(".js-page-2").fadeIn()
   $("#storNum").val("")
})
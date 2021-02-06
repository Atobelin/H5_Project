// ------------page-1
// 获取经纬度
var map = new AMap.Map('container', {
   resizeEnable: true
})
var lng;
var lat;
map.plugin('AMap.Geolocation', function () {
   var geolocation = new AMap.Geolocation({
      // 是否使用高精度定位，默认：true
      enableHighAccuracy: true,
      // 设置定位超时时间，默认：无穷大
      timeout: 10000,
      // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
      buttonOffset: new AMap.Pixel(10, 20),
      //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      zoomToAccuracy: true,
      //  定位按钮的排放位置,  RB表示右下
      buttonPosition: 'RB'
   })

   geolocation.getCurrentPosition()
   AMap.event.addListener(geolocation, 'complete', onComplete)
   AMap.event.addListener(geolocation, 'error', onError)

   function onComplete(data) {
      lng = data.position.lng;
      lat = data.position.lat;
      // lng = '121.345425896217';
      // lat = '30.72159862887';
      // alert(lng, lat)
      console.log(lng)
      console.log(lat)
      shopRecommend(lng, lat)
      $(".js-go-page-3").click(function () {
         $(".js-page-1").fadeOut(0)
         $(".js-page-3").fadeIn(0)
         // 重置
         $("#personName").val('')
         $("#personSex").val('')
         $("#personTel").val('')
         $("#personCode").val('')
      })
   }

   function onError(data) {
      // 定位出错
      // alert(JSON.stringify(data))
      // layer.msg('获取位置信息错误')
      $(".js-go-page-3").click(function () {
         layer.msg('获取位置信息错误')
      })
   }
})
// 获取附近门店
function shopRecommend(lng, lat) {
   $.ajax({
      url: 'http://vivo.songjiang.xyz/shop/shop/shop_recommend',
      type: 'get',
      data: {
         shop_id: shop_id_url,
         longitude: lng,
         latitude: lat
      },
      success: function (res) {
         console.log(res)
         if (res.code == 1) {
            // 最近店铺
            shop_id = res.data.shop.shop_id
            $(".js-nerestStorName").html(res.data.shop.shop_name)
            $(".js-nerestStorPlace-bottom").html(res.data.shop.shop_address)
            $(".js-nerestStorTel-bottom").html(res.data.shop.shop_tel)
            var giftBoxArry = []
            for (var h = 0; h < res.data.reward.length; h++) {
               giftBoxArry.push('<div class="text">' + res.data.reward[h].reward_name + '：' + res.data.reward[h].reward_desc + '</div>')
            }
            $(".js-giftBox-bottom").html(giftBoxArry)
            // 是否显示门店礼遇
            if (res.data.shop.shop_status == 2) {
               $(".js-if-show-gift").fadeIn()
            } else {
               $(".js-if-show-gift").fadeOut()
            }
         } else {
            layer.msg(res.message)
         }
      },
      error: function (data) {
         console.log(data);
      }
   })
}
// 用户扫码或者经纬度获取推荐商家
// 截取url参数
function getQueryString(name) {
   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
   var r = window.location.search.substr(1).match(reg);
   if (r != null) return unescape(r[2]);
   return null;
}
var shop_id_url
if (getQueryString("shop_id")) {
   shop_id_url = getQueryString("shop_id")
} else {
   shop_id_url = 0
   // 加载中
   setTimeout(function () {
      layer.closeAll('loading');
   }, 2000);
}
// ------------------page-2
$(".js-back-page-3").click(function () {
   $(".js-page-2").fadeOut(0)
   $(".js-page-3").fadeIn(0)
})
$(".js-go-page-5-button").click(function () {
   $(".js-page-2").fadeOut(0)
   $(".js-page-5").fadeIn(0)
})
// select选择
var token
var shop_id
var textSheng
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
         url: 'http://vivo.songjiang.xyz/shop/shop/city',
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
         url: 'http://vivo.songjiang.xyz/shop/shop/city',
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
// 获取周围门店
function getShopList(rowsNum) {
   $.ajax({
      url: 'http://vivo.songjiang.xyz/shop/shop/shop_list',
      type: 'get',
      data: {
         rank1_city_id: valueSheng,
         rank2_city_id: valueShi,
         rank3_city_id: valueQu,
         shop_status: 2,
         rows_num: rowsNum
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
$(".js-qu-select").on("change blur", function (data) {
   valueQu = data.target.selectedOptions[0].id
   // 获取店铺列表
   if (valueQu == '') {
      return
   } else {
      getShopList(100)
   }
})
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
// ------------page-3
var phoneReg = /(^1[3|4|5|7|8|9]\d{9}$)|(^09\d{8}$)/; //手机号正则
var count = 60; //间隔函数，1秒执行
var InterValObj1; //timer变量，控制时间
var curCount1; //当前剩余秒数
$(".js-back-page-1").click(function () {
   $(".js-page-3").fadeOut(0)
   $(".js-page-1").fadeIn(0)
})
// 选择性别
var checkSex
$("#personSex").change(function (data) {
   $(".js-tip").fadeOut(0)
   checkSex = data.target.value
});
var customer_id
$(".js-go-page-5").click(function () {
   var phoneValue = $.trim($('#personTel').val())
   if ($("#personName").val() == '') {
      layer.msg("请填写姓名！");
   } else if (!checkSex) {
      layer.msg("请选择性别！");
   } else if ($("#personTel").val() == '') {
      layer.msg("请填写联系方式！");
   } else if (!phoneReg.test(phoneValue)) {
      layer.msg("请输入有效的手机号码");
   } else if ($("#personCode").val() == '') {
      layer.msg("请填写验证码！");
   } else {
      // 最近门店领取
      $.ajax({
         url: 'http://vivo.songjiang.xyz/customer/customer/customer_add',
         type: 'post',
         data: {
            // shop_id: shop_id,
            mobile: $.trim($('#personTel').val()),
            name: $("#personName").val(),
            gender: checkSex,
            vcode: $("#personCode").val()
         },
         success: function (res) {
            console.log(res)
            if (res.code == 1) {
               customer_id = res.data.customer_id
               // 绑定
               $.ajax({
                  url: 'http://vivo.songjiang.xyz/customer/customer/customer_bind_shop',
                  type: 'post',
                  data: {
                     shop_id: shop_id,
                     customer_id: customer_id
                  },
                  success: function (res) {
                     console.log(res)
                     if (res.code == 1) {
                        $(".js-page-3").fadeOut(0)
                        $(".js-page-5").fadeIn(0)
                        // 经纬度
                        shopName = res.data.shop.shop_name
                        shoplat = res.data.shop.shop_latitude
                        shoplng = res.data.shop.shop_longitude
                        // 返回url
                        $(".js-card-url").attr('src', res.data.card_path)
                     } else {
                        layer.msg(res.message)
                     }
                  },
                  error: function (data) {
                     console.log(data);
                  }
               })
            } else if (res.code == 0) {
               layer.msg(res.message)
            } else if (res.code == 3) {
               $(".js-page-3").fadeOut(0)
               $(".js-page-5").fadeIn(0)
               shopName = res.data.shop.shop_name
               shoplat = res.data.shop.shop_latitude
               shoplng = res.data.shop.shop_longitude
               // 返回url
               $(".js-card-url").attr('src', res.data.card_path)
            }
         },
         error: function (data) {
            console.log(data);
         }
      })
   }
})
$(".js-go-page-2").click(function () {
   var phoneValue = $.trim($('#personTel').val())
   if ($("#personName").val() == '') {
      layer.msg("请填写姓名！");
   } else if (!checkSex) {
      layer.msg("请选择性别！");
   } else if ($("#personTel").val() == '') {
      layer.msg("请填写联系方式！");
   } else if (!phoneReg.test(phoneValue)) {
      layer.msg("请输入有效的手机号码");
   } else if ($("#personCode").val() == '') {
      layer.msg("请填写验证码！");
   } else {
      $.ajax({
         url: 'http://vivo.songjiang.xyz/customer/customer/customer_add',
         type: 'post',
         data: {
            // shop_id: shop_id,
            mobile: $.trim($('#personTel').val()),
            name: $("#personName").val(),
            gender: checkSex,
            vcode: $("#personCode").val()
         },
         success: function (res) {
            console.log(res)
            if (res.code == 1) {
               $(".js-page-3").fadeOut(0)
               $(".js-page-2").fadeIn(0)
               customer_id = res.data.customer_id
               // 获取最近门店信息
               $.ajax({
                  url: 'http://vivo.songjiang.xyz/shop/shop/check_shop_form',
                  type: 'get',
                  data: {
                     shop_id: shop_id
                  },
                  success: function (res) {
                     console.log(res)
                     // token = res.token
                     // shop_id = res.data.shop_id
                     $(".js-nerestStorPlace").html(res.data.shop_address)
                  },
                  error: function (data) {
                     console.log(data);
                  }
               })
               // 获取更多门店
               $.ajax({
                  url: 'http://vivo.songjiang.xyz/shop/shop/more_shop_recommend',
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
               // // 行政区划获取
               $.ajax({
                  url: 'http://vivo.songjiang.xyz/shop/shop/city',
                  type: 'get',
                  data: {
                     parent_id: 0
                  },
                  success: function (res) {
                     // console.log(res)
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
            } else if (res.code == 0) {
               layer.msg(res.message)
            } else if (res.code == 3) {
               $(".js-page-3").fadeOut(0)
               $(".js-page-5").fadeIn(0)
               shopName = res.data.shop.shop_name
               shoplat = res.data.shop.shop_latitude
               shoplng = res.data.shop.shop_longitude
               // 返回url
               $(".js-card-url").attr('src', res.data.card_path)
            }
         },
         error: function (data) {
            console.log(data);
         }
      })
   }
})
// 获取列表 更多门店
function getMoreStorList(res) {
   var storArry = []
   for (var k = 0; k < res.data.data.length; k++) {
      storArry.push(
         '<div class="list"><img src="imgs/page-2/14.png" alt="" class="img"><div class="title">' +
         res.data.data[k].shop_name + '</div><div class="place">' + res.data.data[k]
         .shop_address + '</div><img id="' + res.data.data[k].shop_id +
         '" src="imgs/page-2/15.png" alt="" class="button js-go-page-5-button"></div>')
   }
   $(".js-storList").html(storArry)
   $(".js-go-page-5-button").click(function () {
      // 更多门店领取
      $.ajax({
         url: 'http://vivo.songjiang.xyz/customer/customer/customer_bind_shop',
         type: 'post',
         data: {
            shop_id: $(this).attr('id'),
            customer_id: customer_id
         },
         success: function (res) {
            console.log(res)
            if (res.code == 1) {
               $(".js-page-2").fadeOut(0)
               $(".js-page-5").fadeIn(0)
               // 经纬度
               shopName = res.data.shop.shop_name
               shoplat = res.data.shop.shop_latitude
               shoplng = res.data.shop.shop_longitude
               // 返回url
               $(".js-card-url").attr('src', res.data.card_path)
            } else {
               layer.msg(res.message)
            }
         },
         error: function (data) {
            console.log(data);
         }
      })
   })
}
var shopName;
var shoplng;
var shoplat;
// 最近门店领取
$(".js-nerestStor-button").click(function () {
   $.ajax({
      url: 'http://vivo.songjiang.xyz/customer/customer/customer_bind_shop',
      type: 'post',
      data: {
         shop_id: shop_id,
         customer_id: customer_id
      },
      success: function (res) {
         console.log(res)
         if (res.code == 1) {
            $(".js-page-2").fadeOut(0)
            $(".js-page-5").fadeIn(0)
            // 经纬度
            shopName = res.data.shop.shop_name
            shoplan = res.data.shop.shop_latitude
            shoplan = res.data.shop.shop_longitude
            // 返回url
            $(".js-card-url").attr('src', res.data.card_path);
         } else {
            layer.msg(res.message)
         }
      },
      error: function (data) {
         console.log(data);
      }
   })
})
// 发送验证码
$(".js-send-code").click(function () {
   sendMessage1()
})

function sendMessage1() {
   curCount1 = count;
   var phone = $.trim($('#personTel').val());
   if (!phoneReg.test(phone)) {
      layer.msg("请输入有效的手机号");
   } else {
      //向后台发送处理数据
      // console.log(phone)
      $.ajax({
         url: 'http://vivo.songjiang.xyz/customer/customer/sms_code',
         type: 'post',
         data: {
            mobile: phone
         },
         success: function (res) {
            if (res.code !== 1) {
               layer.msg(res.msg)
            } else {
               console.log('发送请求')
               //设置button效果，开始计时
               $(".js-send-code").fadeOut(0)
               $(".js-time").fadeIn()
               $(".js-time").text(+curCount1 + "秒后再获取");
               InterValObj1 = window.setInterval(SetRemainTime1, 1000); //启动计时器，1秒执行一次
            }
         },
         error: function (data) {
            console.log(data);
         }
      })
   }

}

function SetRemainTime1() {
   if (curCount1 == 0) {
      window.clearInterval(InterValObj1); //停止计时器
      $(".js-send-code").fadeIn(0)
      $(".js-time").fadeOut()
   } else {
      curCount1--;
      $(".js-time").text(+curCount1 + "秒再获取");
   }
}

// -----------page-5
$(".js-go-back-page-3").click(function () {
   $(".js-page-5").fadeOut(0)
   $(".js-page-3").fadeIn(0)
})

$(".map-button").click(function () {
   window.location.href = 'https://m.amap.com/navi/?start=' + shoplng + ',' + shoplat + '&dest=' + shoplng + ',' + shoplat + '&destName=' + shopName + '&key=ab2b451a35b0fd8ba2567a62e8990fd1'
})
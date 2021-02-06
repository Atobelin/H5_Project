// loading
perFun()

function perFun() {
   var imgs = document.getElementsByTagName("img");
   var len = 0;
   var percent = document.getElementById("percent");
   // var percentI = document.getElementById("percentI");
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
            layer.msg('【活动说明】本次活动仅在部分省市开展，如您所在城市不在以上范围将为您就近推荐周边城市开展活动的门店')
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
               // layer.msg('【活动说明】本次活动仅在部分省市开展，如您所在城市不在以上范围将为您就近推荐周边城市开展活动的门店')
            }
         }
      }
   }
}
// ------------page-1
var resultOrigin
var resultDestination
// 百度地图API功能
var map = new BMap.Map("demo");
var point = new BMap.Point(108.95, 34.27); //地图初始中心点，加载地图定位点
map.centerAndZoom(point, 12);
// 创建地理编码实例      
var myGeo = new BMap.Geocoder();
// 根据坐标得到地址描述    
var geolocation = new BMap.Geolocation();
var gc = new BMap.Geocoder();
geolocation.getCurrentPosition(function (r) { //定位结果对象会传递给r变量  

   if (this.getStatus() == BMAP_STATUS_SUCCESS) { //通过Geolocation类的getStatus()可以判断是否成功定位。  
      var pt = r.point;
      map.panTo(pt); //移动地图中心点
      console.log(pt)
      lng = pt.lng;
      lat = pt.lat;
      layer.closeAll('loading');
      shopRecommend(lng, lat)
      myGeo.getLocation(new BMap.Point(lng, lat), function (result) {
         if (result) {
            resultOrigin = result.addressComponents.city
         }
         console.log(resultOrigin)
      })
      $(".js-go-page-3").click(function () {
         $(".js-page-1").fadeOut(0)
         $(".js-page-3").fadeIn(0)
         // 重置
         $("#personName").val('')
         $("#personSex").val('')
         $("#personTel").val('')
         $("#personCode").val('')
      })
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
// 获取附近门店
function shopRecommend(lng, lat) {
   $.ajax({
      url: 'https://vivo.songjiang.xyz/shop/shop/shop_recommend',
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
// 获取周围门店
function getShopList(rowsNum) {
   $.ajax({
      url: 'https://vivo.songjiang.xyz/shop/shop/shop_list',
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

function getCard(res) {
   // 经纬度
   shopName = res.data.shop.shop_name
   shoplat = res.data.shop.shop_latitude
   shoplng = res.data.shop.shop_longitude
   myGeo.getLocation(new BMap.Point(shoplng, shoplat), function (result) {
      if (result) {
         resultDestination = result.addressComponents.city
      }
   })
   // 返回url
   $(".js-card-url").attr('src', res.data.card_path)
   var cardArry = []
   for (var c = 0; c < res.data.reward.length; c++) {
      cardArry.push('<div class="text">' + res.data.reward[c] + '</div>')
   }
   $(".js-cardName").html(res.data.shop.shop_name)
   $(".js-cardBox-bottom").html(cardArry)
   $(".js-cardPlace-bottom").html(res.data.shop.shop_address)
   $(".js-cardTel-bottom").html(res.data.shop.shop_tel)
}
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
         url: 'https://vivo.songjiang.xyz/customer/customer/customer_add',
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
                  url: 'https://vivo.songjiang.xyz/customer/customer/customer_bind_shop',
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
                        getCard(res)
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
               getCard(res)
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
         url: 'https://vivo.songjiang.xyz/customer/customer/customer_add',
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
                  url: 'https://vivo.songjiang.xyz/shop/shop/check_shop_form',
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
                  url: 'https://vivo.songjiang.xyz/shop/shop/more_shop_recommend',
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
                  url: 'https://vivo.songjiang.xyz/shop/shop/city',
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
               getCard(res)
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
         '<div class="list"><img src="./imgs/page-2/14.png" alt="" class="img"><div class="title">' +
         res.data.data[k].shop_name + '</div><div class="place">' + res.data.data[k]
         .shop_address + '</div><img id="' + res.data.data[k].shop_id +
         '" src="./imgs/page-2/15.png" alt="" class="button js-go-page-5-button"></div>')
   }
   $(".js-storList").html(storArry)
   $(".js-go-page-5-button").click(function () {
      // 更多门店领取
      $.ajax({
         url: 'https://vivo.songjiang.xyz/customer/customer/customer_bind_shop',
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
               getCard(res)
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
      url: 'https://vivo.songjiang.xyz/customer/customer/customer_bind_shop',
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
            getCard(res)
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
         url: 'https://vivo.songjiang.xyz/customer/customer/sms_code',
         type: 'post',
         data: {
            mobile: phone
         },
         success: function (res) {
            if (res.code !== 1) {
               layer.msg(res.message)
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
   // console.log(lng)
   // console.log(lat)
   // console.log('http://api.map.baidu.com/direction?origin=latlng:' + lat + ',' + lng + '|name:当前位置&origin_region=' + resultOrigin + '&destination=latlng:' + shoplng + ',' + shoplat + '|name:' + shopName + '&destination_region=' + resultDestination + '&mode=driving&&output=html&src=webapp.vivo.万店礼遇')
   window.location.href = 'http://api.map.baidu.com/direction?origin=latlng:' + lat + ',' + lng + '|name:当前位置&origin_region=' + resultOrigin + '&destination=latlng:' + shoplat + ',' + shoplng + '|name:' + shopName + '&destination_region=' + resultDestination + '&mode=driving&&output=html&src=webapp.vivo.万店礼遇'
})
// input问题
$("input").blur(function () {
   setTimeout(function () {
      var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
      window.scrollTo(0, Math.max(scrollHeight - 1, 0));
   }, 300);
})
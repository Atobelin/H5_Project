$(function () {
   var myurl = location.href;
   var desc = '点击探寻真实的自己'; //描述
   $.ajax({
      type: 'post',
      url: "https://vivo.songjiang.xyz/wechat/jssdk/share",
      data: {
         "url": myurl
      },
      dataType: "json",
      success: function (data) {
         wx.config({
            debug: false,
            appId: data.data.appId,
            timestamp: data.data.timestamp,
            nonceStr: data.data.nonceStr,
            signature: data.data.signature,
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
         })
         initShar(title, imgUrl);
      },
      error: function (data) {
         console.log("加载系统变量失败，请重新登录", "登录错误");
      }
   });

   function initShar(title, imgUrl) {
      wx.onMenuShareTimeline({
         title: title,
         desc: desc,
         link: myurl,
         imgUrl: imgUrl,
         success: function () {
            shar2();
         }
      });
      wx.onMenuShareAppMessage({
         title: title,
         desc: desc,
         link: myurl,
         imgUrl: imgUrl,
         success: function () {
            shar2();
         }
      });
   }
   wx.ready(initShar);

   function shar() {
      // 分享成功后执行
      // alert('分享成功了，不要乱点没啥的。');
   }

   function shar2() {
      $.ajax({
         url: 'https://vivo.songjiang.xyz/customer/customer/get_slash_num?type=share',
         type: 'get',
         data: {},
         success: function (res) {
            console.log(res)
         },
         error: function (data) {
            console.log(data);
         }
      })
   }
})
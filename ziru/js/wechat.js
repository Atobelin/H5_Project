$(function(){
    var myurl  = location.href;
    var title  = '沪上青年 租房攻略';
    var desc   = '快来帮我点亮自如福利';
    // var link_url = 'http://ziru.hongyu.ren/1902/index.php?openid=' + openid;
    var link_url = 'http://ziru.hongyu.ren/1902/index.php?openid=' + 'obIGZt0CviXBXKx2ZvWA2z9jAhVw';
    var imgurl = 'http://ziru.hongyu.ren/1902/fx.png';
    $.ajax({
        type: 'post',
        url: "https://klingyang.com/api/Ziru/getConfig",
        data:{"url":myurl},
        dataType: "json",
        success: function (data){
            wx.config({
                debug: false,
                appId: data.appId,
                timestamp: data.timestamp,
                nonceStr: data.nonceStr,
                signature: data.signature,
                jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']
            })
            initShar();
        },
        error: function (data){
            console.log("加载系统变量失败，请重新登录","登录错误");
        }
    });
    function initShar() {
        wx.onMenuShareTimeline({
            title: title,
            desc: desc,
            link: link_url,
            imgUrl: imgurl,
            success: function () {
                shar2();
            }
        });
        wx.onMenuShareAppMessage({
            title: title,
            desc: desc,
            link: link_url,
            imgUrl: imgurl,
            success: function () {
                shar();
            }
        });
    }
    wx.ready(initShar);
    function shar (){
        // 分享成功后执行
        // alert('分享成功了，不要乱点没啥的。');
        // _hmt.push(['_trackEvent','分享给朋友','click',',']);
    }
    function shar2(){
        // _hmt.push(['_trackEvent','分享给朋友圈','click',',']);
    }
})
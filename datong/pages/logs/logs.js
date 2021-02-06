//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    num: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    show: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    times: '0',
    numright: '0'
  },
  click1: function (e) {
    console.log(e.target.dataset.num)
    var index = e.target.dataset.num
    var currentnum = 'num[' + index + ']'
    var currentshow = 'show[' + index + ']'
    var show = this.data.show
    var math = 1
    if( index == 1 || index == 2 || index == 4 || index == 6 || index ==8 || index == 10 || index == 11 || index == 19 || index == 21 || index == 23 || index == 24|| index == 30){
      this.data.numright ++
    }
    for (var i = 0; i < show.length; i++) {
      if (show[i] == true) {
        math++
      }
    }
    // console.log(this.data.show)
    console.log('right:' + this.data.numright)
    console.log('点击次数'+math)
    this.setData({
      [currentnum]: 'flipOut',
      [currentshow]: true,
      times: math
    });
    if (math == 12) {
      wx.redirectTo({
        url: '../grade/grade?num=' + this.data.numright
      })
    }
  },
})

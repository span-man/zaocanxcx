// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    payData: {
      forThePayment: 0,
      hour: "00",
      minute: "00",
      second: "00",
      msg: ">支付失败<"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      'payData.forThePayment': options.price
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {


    let time = 10;

    let timer = setInterval(() => {
      time--;
      this.formatTime(time);
      if (time < 0 || time == 0) {
        setTimeout(() => {
          wx.showModal({
            title: '提示！',
            content: '>>>支付失败<<<',
          })
          clearInterval(timer);
          wx.navigateBack(-1)
        }, 800);
      }
    }, 1000);


  },
  // 时间 格式化
  formatTime(_time) {
    // this.hour = this.formatTwoPositions(parseInt(_time / 3600));
    // this.minute = this.formatTwoPositions(parseInt(_time / 60));
    // this.second = this.formatTwoPositions(parseInt(_time % 60));
    this.setData({
      'payData.hour': this.formatTwoPositions(parseInt(_time / 3600)),
      'payData.minute': this.formatTwoPositions(parseInt(_time / 60)),
      'payData.second': this.formatTwoPositions(parseInt(_time % 60)),
    })
  },
  /* 遇到 单个字符 给其前面 补零 */
  formatTwoPositions(_arg) {
    //substr(-2)   从倒数第二个数字开始截取
    let newStr = ("0" + _arg).substr(-2);
    return newStr;
  }
})
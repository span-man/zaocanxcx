// pages/my/myOrder/myOrderDetails/myOrderDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsData: {},
    goodsTAndList: [{
        title: '平台优惠',
        message: '无'
      }, {
        title: '积分',
        message: '+5'
      }, {
        title: '实付',
        message: 0.06
      }, {
        title: '下单时间',
        message: '2018/02/12 21:58:59'
      },
      {
        title: '订单编号',
        message: 1212121215456
      },
    ],
    stars: [1, 1, 1, 1, 1]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(getApp().globalData.tempDataFromMyOrderToDetail);
    let tempData = getApp().globalData.tempDataFromMyOrderToDetail;
    console.log("tempData---->", typeof tempData)
    this.setData({
      detailsData: tempData
    })

  },

  // topay 待支付的点击直接去支付
  topay() {
    console.log("去付款")
    wx.navigateTo({
      url: '/pages/pay/pay',
    })
  },

  // cancelPay 取消订单
  cancelPay() {
    console.log("取消订单")
  },

  // 点击了星星
  checkStar(e) {
    let i = e.currentTarget.dataset.i;
    console.log("星星该变色了。e-->", i)
    let tempArr = []
    for(let j=0;j<5;j++){
      if(j<=i){
        tempArr.push(1)
      }else{
        tempArr.push(0)        
      }
    }
    this.setData({
      stars:tempArr
    })
  }

})
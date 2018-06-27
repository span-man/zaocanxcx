// pages/my/myOrder/myOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myOrderData: [{
        id: 1555166262626,
        dateTime: '2018/06/22 09:42:08',
        status: "已退款",
        goods: [{
          pic: 'http://huyaimg.msstatic.com/avatar/1093/f5/9f51df52143c14ba7fab3b01849dd4_180_135.jpg?0?424782',
          name: "四方牛肉面",
          num: 1,
          price: 0.04
        }, {
          pic: 'http://huyaimg.msstatic.com/avatar/1093/f5/9f51df52143c14ba7fab3b01849dd4_180_135.jpg?0?424782',
          name: "牛肉面2222",
          num: 2,
          price: 5.06
        }, ],

      }, {
        id: 1555166262626,
        dateTime: '2018/06/22 09:42:08',
        status: "已退款",
        goods: [{
          pic: 'http://huyaimg.msstatic.com/avatar/1093/f5/9f51df52143c14ba7fab3b01849dd4_180_135.jpg?0?424782',
          name: "四方牛肉面",
          num: 1,
          price: 0.04
        }, {
          pic: 'http://huyaimg.msstatic.com/avatar/1093/f5/9f51df52143c14ba7fab3b01849dd4_180_135.jpg?0?424782',
          name: "牛肉面2222",
          num: 2,
          price: 5.06
        }, ],

      }, {
        id: 1555166262626,
        dateTime: '2018/06/22 09:42:08',
        status: "已退款",
        goods: [{
          pic: 'http://huyaimg.msstatic.com/avatar/1093/f5/9f51df52143c14ba7fab3b01849dd4_180_135.jpg?0?424782',
          name: "四方牛肉面",
          num: 1,
          price: 0.04
        }, {
          pic: 'http://huyaimg.msstatic.com/avatar/1093/f5/9f51df52143c14ba7fab3b01849dd4_180_135.jpg?0?424782',
          name: "牛肉面2222",
          num: 2,
          price: 5.06
        }, ],

      }, {
        id: 1555166262626,
        dateTime: '2018/06/22 09:42:08',
        status: "已退款",
        goods: [{
          pic: 'http://huyaimg.msstatic.com/avatar/1093/f5/9f51df52143c14ba7fab3b01849dd4_180_135.jpg?0?424782',
          name: "四方牛肉面",
          num: 1,
          price: 0.04
        }, {
          pic: 'http://huyaimg.msstatic.com/avatar/1093/f5/9f51df52143c14ba7fab3b01849dd4_180_135.jpg?0?424782',
          name: "牛肉面2222",
          num: 2,
          price: 5.06
        }, ],

      }, {
        id: 1555166262626,
        dateTime: '2018/06/22 09:42:08',
        status: "已退款",
        goods: [{
          pic: 'http://huyaimg.msstatic.com/avatar/1093/f5/9f51df52143c14ba7fab3b01849dd4_180_135.jpg?0?424782',
          name: "四方牛肉面",
          num: 1,
          price: 0.04
        }, {
          pic: 'http://huyaimg.msstatic.com/avatar/1093/f5/9f51df52143c14ba7fab3b01849dd4_180_135.jpg?0?424782',
          name: "牛肉面2222",
          num: 2,
          price: 5.06
        }, ],

      }, {
        id: 1555166262626,
        dateTime: '2018/06/22 09:42:08',
        status: "已退款",
        goods: [{
          pic: 'http://huyaimg.msstatic.com/avatar/1093/f5/9f51df52143c14ba7fab3b01849dd4_180_135.jpg?0?424782',
          name: "四方牛肉面",
          num: 1,
          price: 0.04
        }, {
          pic: 'http://huyaimg.msstatic.com/avatar/1093/f5/9f51df52143c14ba7fab3b01849dd4_180_135.jpg?0?424782',
          name: "牛肉面2222",
          num: 2,
          price: 5.06
        }, ],

      },

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },
  // checkTheDetails 点击去具体页面
  checkTheDetails(e) {
    getApp().globalData.tempDataFromMyOrderToDetail = e.currentTarget.dataset.d;  
    wx.navigateTo({
      url: '/pages/my/myOrder/myOrderDetails/myOrderDetails'
    })
  }
})
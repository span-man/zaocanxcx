// pages/foods/foods.js
Page({

  /**
   * 页面的初始数据

  此页面的业务流程是：
  1 地图标注的点击之后，到此页面，此页面接收到 解析其 机器的id 信息。
  2 通过id 查找服务器存放的 机器信息 [id,机器的位置详情，能做的早餐数据，繁忙与否的状态信息]
  3 渲染到页面，用户选择之后点击结算，去付款页面
   */
  data: {
    foodsId:{

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    console.log("map传过来的数据是--->",options.strdata)

    //机器的id
    let mechineID = JSON.parse(options.strdata).id;

    let url = getApp().globalData.domain
    wx.request({
      url: url+'?mechineID='+mechineID,
      success(res){
        console.log("res--->",res.data)
      }
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
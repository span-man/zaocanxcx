//index.js
//获取应用实例
const app = getApp()

function getL() {
  return new Promise((resolve, reject) => {
    wx.getLocation({
      success(res) {
        console.log(res)
        if (!!res) {
          resolve({
            latitude: res.latitude,
            longitude: res.longitude
          })
        } else {
          reject("地址获取失败。")
        }
      },
    })
  })
}

function openL(_lat, _lon) {
  return new Promise((resolve, reject) => {
    wx.openLocation({
      latitude: _lat,
      longitude: _lon,
      success(res) {
        console.log("成功。")
      },
      fail(res) {
        console.log("失败。")
      }
    })
  })
}


// 引入SDK核心类
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    // getL().then((data) => {
    //   console.log("data---->", data)
    //   if (data != -1) {
    //     return openL(data.latitude, data.longitude)
    //   } else {
    //     return false
    //   }
    // }).then((data) => {
    //   console.log(data)
    // })



    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'MIPBZ-CZN3V-AGCPJ-UGIU4-2H5UK-RQFQQ'
    });

    console.log(qqmapsdk)




  },
  onShow() {
    // 调用接口
    // qqmapsdk.search({
    //   keyword: '酒店',
    //   success: function(res) {
    //     console.log("酒店--->",res);
    //   },
    //   fail: function(res) {
    //     console.log(res);
    //   },
    //   complete: function(res) {
    //     // console.log(res);
    //   }
    // })

   
    // 实例化API核心类
   

    // 调用接口
    // qqmapsdk.reverseGeocoder({
    //   location: {
    //     latitude: 39.984060,
    //     longitude: 116.307520
    //   },
    //   success: function (res) {
    //     console.log(res);
    //   },
    //   fail: function (res) {
    //     console.log(res);
    //   },
    //   complete: function (res) {
    //     // console.log(res);
    //   }
    // });

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
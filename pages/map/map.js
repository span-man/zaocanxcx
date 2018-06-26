var app = getApp();

Page({
  data: {
    url: '',
    listData: [{
      "id": 1,
      "placeName": "中关村广场",
      "placeImageUrl": "",
      "placeOpenTime": 1505854800,
      "placeCloseTime": 1505919600,
      "placeAddress": "北京市海淀区中关广场",
      "placeLongitude": "123.447559",
      "placeLatitude": "41.823735"
    }, {
      "id": 2,
      "placeName": "虎丘的广场",
      "placeImageUrl": "",
      "placeOpenTime": 1506286800,
      "placeCloseTime": 1506258000,
      "placeAddress": "江苏省苏州虎丘",
      "placeLongitude": "123.402715",
      "placeLatitude": "41.832335"
    }, ],
    scale: '15',
    Height: '0',
    controls: '40',
    latitude: '',
    longitude: '',
    markers: [],
  },
  onReady: function(e) {
    // 使用 wx.createMapContext 获取 map 上下文 
    this.mapCtx = wx.createMapContext('myMap')

  },
  onLoad: function() {
    var that = this;

    that.setData({
      url: app.globalData.domain
    })

    var data = JSON.stringify({
      page: 1,
      pageSize: 10,
      request: {
        placeLongitude: app.globalData.longitude,
        placeLatitude: app.globalData.latitude,
        userId: app.globalData.userId
      }
    })



    wx.getLocation({
      type: 'wgs84', //返回可以用于wx.openLocation的经纬度
      success: (res) => {
        that.setData({
          markers: that.getSchoolMarkers(),
          scale: 12,
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
    });

    wx.getSystemInfo({
      success: function(res) {
        //设置map高度，根据当前设备宽高满屏显示
        that.setData({
          view: {
            Height: res.windowHeight
          },

        })
      }
    })
  },
  controltap(e) {
    this.moveToLocation()
    console.log("controltap")
  },

  // 地图标点的点击事件  e.markerId  可以作为唯一标识
  markertap(e) {
    console.log("markertap--用户点击了标点的事件---", e.markerId)
    let tempJson;
    this.data.listData.map(item => {
      if (e.markerId == item.id) {
        tempJson = item
      }
    })
    wx.navigateTo({
      url: '/pages/foods/foods?strdata=' + JSON.stringify(tempJson),
    })
  },
  getSchoolMarkers() {

    var market = [];

    for (let item of this.data.listData) {

      let marker1 = this.createMarker(item);

      market.push(marker1)
    }
    return market;
  },
  moveToLocation: function() {
    this.mapCtx.moveToLocation()
  },
  strSub: function(a) {
    var str = a.split(".")[1];
    str = str.substring(0, str.length - 1)
    return a.split(".")[0] + '.' + str;
  },
  createMarker(point) {

    let latitude = this.strSub(point.placeLatitude);
    let longitude = point.placeLongitude;
    let marker = {
      iconPath: "/assets/img/logo.png",
      id: point.id || 0,
      name: point.placeName || '',
      title: point.placeName || '',
      latitude: latitude,
      longitude: longitude,
      label: {
        x: -24,
        y: -26,
        content: point.placeName
      },
      width: 30,
      height: 30
    };
    return marker;
  }
})
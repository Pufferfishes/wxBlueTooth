//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // isBluetoothConnection: false,
    isBluetoothConnection: false
  },

  onLoad: function (options) {
    var that = this;
    // this.setData({ isBluetoothConnection: wx.getStorageSync('isConnected') || false});
  },
  toIndex: function () {
    wx.switchTab({
      url: '../index/index',
    })
  },
  pair: function () {
    wx.redirectTo({
      url: '../pair/pair'
    })
  },
  ready: function (e) {
    var that = this;
    var mode = e.currentTarget.dataset.mode;

    if (mode == "dayMode") {
      wx.setStorageSync('modeType', "dayMode");
    } else if (mode == "nightMode") {
      wx.setStorageSync('modeType', "nightMode");
    }
    if (that.data.isBluetoothConnection) {
      wx.reLaunch({
        url: '../onready/onready?mode=' + mode
      });
    } else {
      wx.redirectTo({
        url: '../pair/pair?mode=' + mode
      })
    }
  },
  onShow: function () {
    console.log("index==onShow方法", wx.getStorageSync('isConnected') || false);
    this.setData({ isBluetoothConnection: wx.getStorageSync('isConnected') || false });
  }
})

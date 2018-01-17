// pages/list/list.js
const app = getApp()
var goodListUrl = app.globalData.url + 'goodsList'
var CategoryUrl = app.globalData.url + 'goodsCategory'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    imageList: []   
  },
  // 自定义选择图片
  chooseImage: function () {
    var that = this;
    wx.chooseImage({
      count: 9 - that.data.imageList.length,
      success: function (res) {
        that.setData({
          imageList: that.data.imageList.concat(res.tempFilePaths)
        });
      },
      fail: function (res) { 
        console.log(res);
      },
      complete: function (res) { },
    })
  },
  // 删除图片
  delImage: function (e) {
    var that = this;
    that.removeByValue(that.data.imageList, e.target.dataset.src)
    that.setData({
      imageList: that.data.imageList
    })
  },
  // 放大图片
  previewImage: function (e) {
    var current = e.target.dataset.src
    wx.previewImage({
      current: current,
      urls: this.data.imageList
    })
  },
  // 辅助函数
  removeByValue: function (arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == val) {
        arr.splice(i, 1);
        break;
      }
    }
  },

})
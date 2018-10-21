// pages/order/order.js
const qcloud = require('../../vendor/wafer2-client-sdk/index.js');
const config = require('../../config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product: {
      id: 1,
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product1.jpg',
      name: '商品1',
      price: 100,
      source: '国内·广东',
    }
  },
  getProduct: function(id){
    wx.showLoading({
      title: '商品数据加载中...'
    });
    qcloud.request({
      url: config.service.productDetail + id,
      success: result => {
        if (!result.data.code) {
          this.setData({
            product: result.data.data
          });
        }
        else {
          setTimeout(function(){
            wx.navigateBack();
          }, 2000);
        }
        wx.hideLoading();
      },
      fail: result => {
        wx.hideLoading();
        setTimeout(function () {
          wx.navigateBack();
        }, 2000);
        console.log(result);
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getProduct(options.id)
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
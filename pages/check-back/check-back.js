// pages/check-leave/check-leave.js
const db = wx.cloud.database();
const app= getApp().appData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backlist:[],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this
    db.collection('BackRequest').where({
      pass_fdy:'false'
    }).get({
      success:function(res){
<<<<<<< Updated upstream
        console.log(res)
        that.backlist = res.data[0]
        console.log(that.backlist)
=======
        console.log('=',res.data)
        that.setData({
          backlist:res.data
        },()=>{ })
       console.log('成功',that.data.backlist)
        
>>>>>>> Stashed changes

      }
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
// pages/childexam/childexam.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select:"",//记录选择的选项
    status:"",//记录状态
    list:[//题目信息
      {
        title:"1+1=?",
        option:["2","3","4","5"],
        score:["10","0","0","0"],
      },
      {
        title:"1+2=?",
        option:["2","3","4","5"],
        score:["10","0","0","0"],
      }

    ],
    nowQuestion:0,//当前是第几道题
    optionList:["A","B","C","D"],

  },

  //判断选择答案
  selectAnswer(e){
    
    const{item}=e.currentTarget.dataset;
    this.setData({
      status:"success",
      select:item,
    })
    
  

//1.判断用户选哪个选项
//2.改变背景色

  },
  next(){
    this.setData({
      select:"",
      status:"",
      nowQuestion:this.data.nowQuestion+1,
    })

  },
  previous(){
    this.setData({
      select:"",
      status:"",
      nowQuestion:this.data.nowQuestion-1,
    })
  },
  submit(){
    wx.redirectTo({
      url: '/pages/test_result/test_result',
    })

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
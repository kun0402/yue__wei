// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firco: "#1a1919",
    secco: "#8d8c8c",
    thico: "#8d8c8c",
    //轮播图数组
    swiperList:[
      {
        img_url:"/pages/Img/main.png",
      },
      {
        img_url:"/pages/Img/home.png",
      }

    ],

    booklist:[
      {
        book1_id:"1",
        book1_name:"童年",
        author1:"高尔基",
        img1_src:"/pages/Img/head.jpeg",
        book2_id:"2",
        book2_name:"假如给我三天光明",
        img2_src:"/pages/Img/head.jpeg",
        author2:"海伦·凯勒"

      },
      {
        book1_id:"3",
        book1_name:"彷徨",
        author1:"鲁迅",
        img1_src:"/pages/Img/head.jpeg",
        book2_id:"4",
        book2_name:"故事新编",
        img2_src:"/pages/Img/head.jpeg",
        author2:"鲁迅"

      },
      {
        book1_id:"3",
        book1_name:"彷徨",
        author1:"鲁迅",
        img1_src:"/pages/Img/head.jpeg",
        book2_id:"4",
        book2_name:"故事新编",
        img2_src:"/pages/Img/head.jpeg",
        author2:"鲁迅"

      }
    ],

  },

  //定义底部导航栏跳转函数
  first_select() {

  },
  second_select() {
    wx.navigateTo({
      url: '/pages/bookread/bookread',
    })
  },
  third_select() {
    wx.redirectTo({
      url: '/pages/myinfo/myinfo',
    })
  },

  detail(evt){
    console.log(evt)
    wx.navigateTo({
      url: '/pages/bookdetail/bookdetail',
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
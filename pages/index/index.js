//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navH: 0,
    nowIdx: 0,//当前swiper索引
    imgUrls: ['/images/img-1.png', '/images/img-1.png', '/images/img-1.png']
  },
  
  //swiper滑动事件
  swiperChange: function (e) {
    this.setData({
      nowIdx: e.detail.current
    })
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  onLoad: function () {
    console.log(app.globalData.navHeight)
    this.setData({
      navH: app.globalData.navHeight
    });
    
  },
  
})

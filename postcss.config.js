module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 设计稿 375:37.5
      // 设计稿：750:75
      // Vant 是基于 375
      // 设计稿一般都是以iPhone6为原型进行设计的
      // iPhone 6. 7 .8的设备物理像素都是750
      rootValue: 37.5,
      propList: ['*']
    }
  }
}

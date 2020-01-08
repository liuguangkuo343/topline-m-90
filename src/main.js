import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 注册vant组件库
import './utils/register-vant'
// 动态设置REM基准值(HTML标签字体大小)
import 'amfe-flexible'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

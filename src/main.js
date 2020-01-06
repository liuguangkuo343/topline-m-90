import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入
import { Button } from 'vant'
// 注册
Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

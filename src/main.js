import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 字体图标
import './assets/font_4z0ldk5sgv/iconfont.css'

// 引入axios
import axios from 'axios'
// 设置baseURL
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 注册到全局
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

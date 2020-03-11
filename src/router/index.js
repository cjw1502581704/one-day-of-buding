import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login'
import Home from '../components/home'
import '../assets/css/global.css'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/home', component: Home }
]

const router = new VueRouter({
  routes
})
// 添加导航守卫
// router.beforeEach((to, from, next) => {
//   // 如果去登录页直接放行
//   if (to.path === '/login') return next()
//   // 取出token
//   const tokenStr = window.sessionStorage.getItem('token')
//   // 验证tokoen，没有就导航去登录页
//   if (!tokenStr) return next('login')
//   // 有token说明是登陆状态，放行
//   next()
// })

export default router

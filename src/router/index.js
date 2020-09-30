import Vue from 'vue'
import VueRouter from 'vue-router'

// 异步加载路由
const shouye = () => import('../components/tab/shouye.vue')
const huiyuan = () => import('../components/tab/huiyuan.vue')
const gouwc = () => import('../components/tab/gouwc.vue')
const sousuo = () => import('../components/tab/sousuo.vue')

//首页内的组件
const xinwen = () => import('../components/shouye/xinw.vue')
const xiangqing = () => import('../components/shouye/xiangqing.vue')
const tup = () => import('../components/shouye/tup.vue')
const imgxiangq = () => import('../components/img/imgxiangq.vue')
const shangpin = () => import('../components/shouye/shangp.vue')

Vue.use(VueRouter)

  const routes = [
//公共组件
    { path:'/',redirect:'/shouye'},
    { path: '/shouye',name: 'shouye',component: shouye},
    { path: '/huiyuan',name: 'huiyuan',component: huiyuan},
    { path: '/gouwc',name: 'gouwc',component: gouwc},
    { path: '/sousuo',name: 'sousuo',component: sousuo},
//首页内组件
    { path: '/shouye/xinw',name: 'xinwen',component: xinwen},
    //:id 代表这里传的是一个参数
    { path: '/shouye/xiangqing/:id',name: 'xiangqing',component: xiangqing},
    { path: '/shouye/tup',name: 'tup',component: tup},
    { path: '/shouye/imgxiangq/:id',name: 'imgxiangq',component: imgxiangq},
    { path: '/shouye/shangp',name: 'shangpin',component: shangpin},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

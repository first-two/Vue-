import Vue from 'vue'
import VueRouter from 'vue-router'

// 异步加载路由
const shouye = () => import('../components/tab/shouye.vue')
const huiyuan = () => import('../components/tab/huiyuan.vue')
const gouwc = () => import('../components/tab/gouwc.vue')
const sousuo = () => import('../components/tab/sousuo.vue')



Vue.use(VueRouter)

  const routes = [
    {path:'/',redirect:'/shouye'},
    {
      path: '/shouye',
      name: 'shouye',
      component: shouye,
      children:[//子路由
          
        ]
    },{
      path: '/huiyuan',
      name: 'huiyuan',
      component: huiyuan
    },{
      path: '/gouwc',
      name: 'gouwc',
      component: gouwc
    },{
      path: '/sousuo',
      name: 'sousuo',
      component: sousuo
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

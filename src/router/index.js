import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Classification from '@/views/Classification'
// import Shopcar from '@/views/Shopcar'
// import Message from '@/views/Message'
// import My from '@/views/My'
import Search from '@/views/Search'
import  Introduce from '@/views/Home/Introduce'
import Homegoods from '@/views/Home/Homegoods'
import Qualifyspace from '@/views/Home/Qualifyspace'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Crazylab from '@/views/Search/Crazylab'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/home/introduce',
        component: Introduce
      },
      {
        path: '/home/homegoods',
        component: Homegoods
      },
      {
        path: '/home/qualifyspace',
        component: Qualifyspace
      },
      {
        path: '/',
        redirect: '/home/introduce'
      },
    ],  
  },
  {
    path: '/classification',
    component: Classification,
  },
  {
    path: '/shopcar',
    component: Login,
  },
  {
    path: '/message',
    component: Login,
  },
  {
    path: '/my',
    component: Login,
  },
  {
    path: '/search',
    component: Search,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path:'/search/crazylab',
    component:Crazylab
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

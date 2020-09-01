import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/Register')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/search/Search')
  },
  {
    path: '/myInfo',
    name: 'myInfo',
    component: () => import('../views/myInfo/MyInfo')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/profile/Profile.vue')
  },
  {
    path: '/infoList',
    name: 'InfoList',
    component: () => import('../views/InfoList/InfoList')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/detail/Detail')
  },
  {
    path: '/goods',
    name: 'Goods',
    component: () => import('../views/goods/Goods')
  },
  {
    path: '/chrage',
    name: 'Chrage',
    component: () => import('../views/charge/Charge')
  },
  {
    path: '/bill',
    name: 'Bill',
    component: () => import('../views/bill/Bill')
  },
  {
    path: '/renzheng',
    name: 'Renzheng',
    component: () => import('../views/renzhegn/Renzheng')
  },
  {
    path: '/bind',
    name: 'Bind',
    component: () => import('../views/bind/bind')
  },
  {
    path: '/password',
    name: 'Password',
    component: () => import('../views/password/password')
  },
  {
    path: '/changepassword',
    name: 'Changepassword',
    component: () => import('../views/changepassword/Changeword')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/message/Message')
  },
  {
    path: '/frozen',
    name: 'Frozen',
    component: () => import('../views/frozen/Frozen')
  },
  {
    path: '/mesDeilter',
    name: 'MesDeilter',
    component: () => import('../views/messageDeilter/MesDeilter')
  },
  {
    path: '/center',
    name: 'Center',
    component: () => import('../views/center/Center')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('../views/service/Service')
  },
  {
    path: '/myshop',
    name: 'Myshop',
    component: () => import('../views/myShop/Myshop')
  },
  {
    path: '/install',
    name: 'Install',
    component: () => import('../views/install/Install')
  },
  {
    path: '/editor',
    name: 'Editor',
    component: () => import('../views/editor/Editor')
  },
  {
    path: '/nickname',
    name: 'Nickname',
    component: () => import('../views/nickname/Nickname')
  },
  {
    path: '/collection',
    name: 'Collection',
    component: () => import('../views/collection/collection')
  },
  {
    path: '/collections',
    name: 'Collections',
    component: () => import('../views/collections/collections')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/history/History')
  },
  {
    path: '/historys',
    name: 'Historys',
    component: () => import('../views/historys/Historys')
  },
  {
    path: '/orderdetails',
    name: 'Orderdetails',
    component: () => import('../views/Orderdetails/orderdetails')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/order/order')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/account/account')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
// router.beforeEach((to, from, next) => {
// // 判断是否登录
//   if (to.meta.requireAuth) {
//     if (JSON.parse(localStorage.getItem('islogin'))) {
//       next()
//     } else {
//       next({
//         path: '/login'
//       })
//     }
//   } else {
//     next()
//   }
//    如果本地 存在 token 则 不允许直接跳转到 登录页面
//   if (to.fullPath === '/login') {
//     if (JSON.parse(localStorage.getItem('islogin'))) {
//       next({
//         path: from.fullPath
//       })
//     } else {
//       next()
//     }
//   }
// })
export default router

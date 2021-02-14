import Store from '@/store'

import Router from 'vue-router'
import User from '../pages/user.vue'
import Gallery from '../pages/gallery.vue'
import LoadPhoto from '../pages/load-photo'
import Login from '../pages/login.vue'
import Home from '../pages/home.vue'

export default new Router({
  routes: [
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery,
      beforeEnter: checkAuth
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      beforeEnter: checkAuth
    },
    {
      path: '/load-photo',
      name: 'load-photo',
      component: LoadPhoto,
      beforeEnter: checkAuth
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    }
  ]
})

function checkAuth(to, from, next) {
  if (Store.state.auth.user) next()
  else next({ name: 'login' })
}
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: true
    },
    {
      path: '/details/:id',
      name: 'details',
      component: () => import(/* webpackChunkName: "details" */ './views/Details.vue'),
      props: true
    },
    {
      path: '/special',
      name: 'special',
      component: () => import(/* webpackChunkName: "about" */ './views/Special.vue')
    }
  ]
})

export default router

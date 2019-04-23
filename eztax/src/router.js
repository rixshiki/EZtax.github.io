import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/advice',
      name: 'advice',
      component: () => import(/* webpackChunkName: "about" */ '@/views/advice.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ '@/views/register.vue')
    },
    {
      path: '/knownledge',
      name: 'knownledge',
      component: () => import(/* webpackChunkName: "about" */ '@/views/knownledge.vue')
    },
    {
      path: '/calculate',
      name: 'calculate',
      component: () => import(/* webpackChunkName: "about" */ '@/views/calculate.vue')
    },
    {
      path: '/calDiscount',
      name: 'calDiscount',
      component: () => import(/* webpackChunkName: "about" */ '@/views/calDiscount.vue')
    },
    {
      path: '/advDiscountTax',
      name: 'advDiscountTax',
      component: () => import(/* webpackChunkName: "about" */ '@/views/advDiscountTax.vue')
    }
    ,
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "about" */ '@/views/contact.vue')
    }
  ]
})

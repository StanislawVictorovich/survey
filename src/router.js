import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('./components/Registration.vue')
  },
  {
    path: '/survey',
    name: 'Survey',
    component: () => import('./components/Survey.vue')
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('./components/Result.vue')
  },
  {
    path: '/accesserror',
    name: 'Accesserror',
    component: () => import('./components/AccessError.vue')
  },
  {
    path: '*',
    redirect: '/Accesserror'
  }
]

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

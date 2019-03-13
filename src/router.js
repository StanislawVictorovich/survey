import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('./components/Registration/Registration.vue')
    },
    {
      path: '/survey',
      name: 'survey',
      component: () => import('./components/Survey/Survey.vue')
    }
  ]
})

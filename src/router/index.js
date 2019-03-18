import Vue from 'vue';
import Router from 'vue-router';
import { routes } from './types';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})

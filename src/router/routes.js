import Home from '../views/Home.vue';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registration',
    name: 'Registration', 
    component: () => import('../components/Registration.vue')
  },
  {
    path: '/survey',
    name: 'Survey',
    component: () => import('../components/Survey.vue')
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('../components/Result.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../components/Users.vue')
  },
  {
    path: '/userdetails?id=:id',
    name: 'UserDetails',
    component: () => import('../components/UserDetails.vue')
  },
  {
    path: '/accesserror',
    name: 'Accesserror',
    component: () => import('../components/AccessError.vue')
  },
  {
    path: '*',
    redirect: '/Accesserror'
  }
];

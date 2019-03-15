import Home from '../views/Home.vue';

export default {
  regEmail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  INCREMENT_CORRECT_ANSWER: 'INCREMENT_CORRECT_ANSWER',
  COMPLETE_TEST: 'COMPLETE_TEST',
  questions: 'questions',
  correctAnswers: 'correctAnswers',
  testCompleted: 'testCompleted',
  incrementCorrectAnswer: 'incrementCorrectAnswer',
  completeTest: 'completeTest',
  routes: [
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
      path: '/accesserror',
      name: 'Accesserror',
      component: () => import('../components/AccessError.vue')
    },
    {
      path: '*',
      redirect: '/Accesserror'
    }
  ]
}
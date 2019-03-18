import Home from '../views/Home.vue';

export default {
  regEmail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  questions: 'questions',
  correctAnswers: 'correctAnswers',
  testCompleted: 'testCompleted',
  incrementCorrectAnswer: 'incrementCorrectAnswer',
  completeTest: 'completeTest',
  SURV_ID: 'surv',
}
import Vue from 'vue';
import Vuex from 'vuex';
import types from './types';

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
/*       correctAnswers: 0,
      testCompleted: false, */
      questions: [
        {
          title: `What will this code outputs? <br>
          <code>alert( 20e-1['toString'](2) );</code>`,
          choises: [
            '2', '10', '20', 'NaN', '4', 'there is an error'
          ],
          correct: 3
        },
        {
          title: `What does this code do:<br><code>break me;</code>`,
          choises: [
            'breakes javascript.', 'exits loop on tag «me».', 'generetes error.'
          ],
          correct: 1
        },
        {
          title: 'What os the sum of [] + 1 + 2?',
          choises: [
            '1', 'NaN', 'undefined', '12', 'other'
          ],
          correct: 4
        },
        {
          title: `What the result will be of the expression below?<br><code>null + {0:1}[0] + [,[1],][1][0]</code>`,
          choises: [
            '0', '1', '2', 'undefined', 'NaN'
          ],
          correct: 2
        },
        {
          title: `What does this code do:<br><code>let a = (1,5 - 1) * 2;<br>alert(a);</code>`,
          choises: [
            '0.9999999999999', '0.5', '8', '-0.5', '4'
          ],
          correct: 2
        },
        {
          title: `What the result will be of the expression below?<br><code>alert( 20e-1['toString'](2) );</code>`,
          choises: [
            '2', '10', '20', 'NaN', 'there is an error in code'
          ],
          correct: 1
        },
        {
          title: `What does this code do:<br><code>function User() { }<br>User.prototype = { admin: false };<br><br>
          let user = new User();<br><br>User.prototype = { admin: true };<br><br>alert(user.admin); </code>`,
          choises: [
            'false', 'undefined', 'true'
          ],
          correct: 0
        },
      ]
    }
  },
  getters: {
/*     correctAnswers: state => state.correctAnswers,
    testCompleted: state => state.testCompleted, */
    questions: state => state.questions
  },/* 
  mutations: {
    INCREMENT_CORRECT_ANSWER(state) {
      state.correctAnswers += 1;
    },
    COMPLETE_TEST(state) {
      state.testCompleted = true;
    }
  },
  actions: {
    incrementCorrectAnswer( { commit } ) {
      commit(types.INCREMENT_CORRECT_ANSWER);
    },
    completeTest( { commit } ) {
      commit(types.COMPLETE_TEST);
    }
  }, */
  strict: process.env.NODE_ENV !== types.PRODUCTION_MODE
})

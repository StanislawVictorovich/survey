import Vue from 'vue';
import Vuex from 'vuex';
import types from './types';
import storage from '../services/storage';

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
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
    questions: state => state.questions
  },
  mutations: {
    RANDOMIZE_QUESTIONS(state) {
      state.questions.sort(() => 0.5 - Math.random());
    },
    SAVE_QUESTIONS(state) {
      storage.setUserData({ questions: state.questions });
    },
    RESTORE_QUESTIONS(state) {
      const { questions } = storage.getUserData();
      if (questions) {
        state.questions = questions;
      }
    }
  },
  actions: {
    randomizeQuestions({ commit }) {
      commit(types.RANDOMIZE_QUESTIONS);
    },
    saveQuestions({ commit }) {
      commit(types.SAVE_QUESTIONS);
    },
    restoreQuestions({ commit }) {
      commit(types.RESTORE_QUESTIONS);
    }
  },
  strict: process.env.NODE_ENV !== types.PRODUCTION_MODE
})

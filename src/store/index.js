import Vue from 'vue';
import Vuex from 'vuex';
import types from './types';
import storage from '../services/storage';
import questions from './questions';

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      questions
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

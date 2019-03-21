import Vue from 'vue';
import Vuex from 'vuex';
import types from './types';
import questions from './questions';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      questions
    }
  },
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== types.PRODUCTION_MODE
})

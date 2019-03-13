import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      email: ''
    }
  },
  getters: {
    email: state => state.email
  },
  mutations: {
    SAVE_EMAIL(state, email) {
      state.email = email;
    }
  },
  actions: {
    saveEmail( { commit}, email ) {
      commit('SAVE_EMAIL', email);
    }
  }
})

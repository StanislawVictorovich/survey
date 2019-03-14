import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import survey from './survey'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    survey
  },
  strict: process.env.NODE_ENV !== 'production'
})

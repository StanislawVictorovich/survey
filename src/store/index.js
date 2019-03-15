import Vue from 'vue'
import Vuex from 'vuex'
import survey from './survey'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    survey
  },
  strict: process.env.NODE_ENV !== 'production'
})

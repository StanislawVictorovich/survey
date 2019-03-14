export default {
  state() {
    return {
      email: null,
      firstName: null,
      lastName: null,
      date: null
    }
  },
  getters: {
    email: state => state.email,
    firstName: state => state.firstName,
    lastName: state => state.lastName,
    date: state => state.date
  },
  mutations: {
    SAVE_EMAIL(state, email) {
      state.email = email;
    },
    SAVE_FIRSTNAME(state, firstName) {
      state.firstName = firstName;
    },
    SAVE_LASTNAME(state, lastName) {
      state.lastName = lastName;
    },
    SAVE_DATE(state, date) {
      state.date = date;
    }
  },
  actions: {
    saveEmail( { commit }, email ) {
      commit('SAVE_EMAIL', email);
    },
    saveFirstName( { commit }, firstName ) {
      commit('SAVE_FIRSTNAME', firstName);
    },
    saveLastName( { commit }, lastName ) {
      commit('SAVE_LASTNAME', lastName);
    },
    saveDate( { commit }, date ) {
      commit('SAVE_DATE', date);
    },
  }
}
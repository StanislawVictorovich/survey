import userData from '../services/userdata';

export default {
  RANDOMIZE_QUESTIONS(state) {
    state.questions.sort(() => 0.5 - Math.random());
  },
  SAVE_QUESTIONS(state) {
    userData.questions = state.questions;
  },
  RESTORE_QUESTIONS(state) {
    const questions = userData.questions;
    
    if (questions) {
      state.questions = questions;
    }
  } 
}

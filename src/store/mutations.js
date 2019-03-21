import storage from '../services/storage';

export default {
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
}

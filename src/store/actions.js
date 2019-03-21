import types from './types';

export default {
  randomizeQuestions({ commit }) {
    commit(types.RANDOMIZE_QUESTIONS);
  },
  saveQuestions({ commit }) {
    commit(types.SAVE_QUESTIONS);
  },
  restoreQuestions({ commit }) {
    commit(types.RESTORE_QUESTIONS);
  }
}

import constants from '../types/constants';

export default {
  state() {
    return {
      correctAnswers: 0,
      testCompleted: false,
      questions: [
        {
          title: 'Чему равна длина arr.length массива arr?',
          choises: [
            '0', '1', '2', '3', '4', 'больше'
          ],
          correct: 3
        },
        {
          title: `Что выведет этот код? <br>
          <code>alert( 20e-1['toString'](2) );</code>`,
          choises: [
            '2', '10', '20', 'NaN', '4', 'в коде ошибка'
          ],
          correct: 3
        },
        {
          title: `Что делает код:<br><code>break me;</code>`,
          choises: [
            'Ломает интерпретатор javascript.', 'Выходит из текущего блока цикла или switch на метку «me».', 'Выдает ошибку.'
          ],
          correct: 1
        },
        {
          title: 'Чему равна сумма [] + 1 + 2?',
          choises: [
            '1', 'NaN', 'undefined', '12', 'другое'
          ],
          correct: 4
        },
        {
          title: `Какой результат будет у выражения ниже?<br><code>null + {0:1}[0] + [,[1],][1][0]</code>`,
          choises: [
            '0', '1', '2', 'undefined', 'NaN'
          ],
          correct: 2
        }
      ]
    }
  },
  getters: {
    correctAnswers: state => state.correctAnswers,
    testCompleted: state => state.testCompleted,
    questions: state => state.questions
  },
  mutations: {
    INCREMENT_CORRECT_ANSWER(state) {
      state.correctAnswers += 1;
    },
    COMPLETE_TEST(state) {
      state.testCompleted = true;
    }
  },
  actions: {
    incrementCorrectAnswer( { commit } ) {
      commit(constants.INCREMENT_CORRECT_ANSWER);
    },
    completeTest( { commit } ) {
      commit(constants.COMPLETE_TEST);
    }
  }
}
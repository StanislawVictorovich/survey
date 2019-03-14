export default {
  state() {
    return {
      correctAnswers: null,
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
    questions: state => state.questions,
    correctAnswers: state => state.correctAnswers
  },
  mutations: {
    INCREMENT_CORRECT_ANSWERS(state) {
      state.correctAnswers += 1;
    }
  },
  actions: {
    incrementCorrectAnswers( { commit } ) {
      commit('INCREMENT_CORRECT_ANSWERS');
    }
  }
}
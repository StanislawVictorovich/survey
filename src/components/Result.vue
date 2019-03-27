<template lang="pug">
div
  h1 {{ firstName }}, here is your result
  md-progress-spinner(
    md-mode='determinate', 
    :md-value='result'
  )
  | {{ result }}%
  h3 You have answered right to {{ correctAnswers }} of {{ questions.length }} questions.
  md-button.md-primary(@click='goHome') Go home
  md-button.md-primary(@click='startTest') Take the test again
  md-button.md-primary(@click='showUsers') Show users
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import userData from '../services/userdata';
import types from '../store/types';

export default {
  data() {
    return {
      firstName: '',
      email: '',
      correctAnswers: 0,
      answersMatrix: []
    }      
  },
  computed: {
    ...mapGetters([types.questions]),
    result() {
        return Math.floor(100 / this.questions.length * this.correctAnswers);
    }
  },
  methods: {
    ...mapActions([types.randomizeQuestions, types.saveQuestions]),
    calculcateCorrectAnsers() {
      for (const [i, item] of this.questions.entries()) {       

        if (item.correct === this.answersMatrix[i]) {
          this.correctAnswers += 1;
        } 

      }
    },
    startTest() {
      userData.currentStep = 0;
      userData.testComplete = false;
      userData.answersMatrix = [];
      this.randomizeQuestions();
      this.saveQuestions();
      this.$router.push({ name: 'Survey' });
    },
    goHome() {
      this.$router.push({ name: 'Home' });
    },
    showUsers() {
      this.saveCurrentUserSurvey();
      this.$router.push({ name: 'Users' });
    },
    saveCurrentUserSurvey() {
      const { email, firstName, lastName, date, answersMatrix } = userData.getUserData();
      const questionsIdMatrix = [];
      const users = userData.users || [];

      for (const [i, item] of this.questions.entries()) {
        questionsIdMatrix.push(item.id);
      }

      users.push({
        firstName, lastName, email, date, answersMatrix, questionsIdMatrix
      });

      //storage.setUserData({ users });
      userData.users = users; console.log(userData.getUserData());
    }
  },
  created() {

    const { email, firstName, answersMatrix } = userData.getUserData();

    if (!firstName || !email || !answersMatrix) {
      this.$router.push({ name: 'Accesserror' });
    }

    this.firstName = firstName;
    this.email = email;
    this.answersMatrix = answersMatrix;

    this.calculcateCorrectAnsers();
  }
}
</script>

<template lang="pug">
div
  h1 {{ firstName }}, here is your result
  md-progress-spinner(md-mode="determinate", :md-value="result") {{ result }}%
  h3 You have answered right to {{ correctAnswers }} of {{ questions.length }} questions.
</template>

<script>
import { mapGetters } from 'vuex';
import storage from '../services/storage';
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
    result: {
      get() {
        return 100 / this.questions.length * this.correctAnswers;
      }
    }
  },
  methods: {
    calculcateCorrectAnsers() {
      this.questions.forEach((item, i) => {       

        if (item.correct === this.answersMatrix[i]) {
          this.correctAnswers += 1;
        } 

      });
    }
  },
  created() {

    const { email, firstName, answersMatrix } = storage.getUserData();

    if (!firstName || !email || !answersMatrix) {
      this.$router.push({ name: 'Accesserror' });
    }

    this.firstName = storage.getUserData().firstName;
    this.email = storage.getUserData().email;
    this.answersMatrix = storage.getUserData().answersMatrix;
    this.calculcateCorrectAnsers();
  }
}
</script>

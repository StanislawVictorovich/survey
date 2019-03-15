<template lang="pug">
div
  h1 {{ firstName }}, here is your result
  md-progress-spinner(md-mode='determinate', :md-value='result') {{ result }}%
  h3 You have answered right to {{ correctAnswers }} of {{ questions.length }} questions.
</template>

<script>
import { mapGetters } from 'vuex';
import storage from '../services/storage';
import { questions, correctAnswers, testCompleted } from '../constants';

export default {
  data() {
    return {
      firstName: storage.getData('firstName')
    }      
  },
  computed: {
    ...mapGetters([questions, correctAnswers, testCompleted]),
    result: {
      get() {
        return 100 / this.questions.length * this.correctAnswers;
      }
    }
  },
  created() {
    if (!storage.getData('email') || !this.firstName || !this.testCompleted) {
      this.$router.push('Accesserror');
      return;
    }
    console.log(this.firstName);
  }
}
</script>

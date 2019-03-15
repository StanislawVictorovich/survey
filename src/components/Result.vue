<template lang="pug">
div
  h1 {{ firstName }}, here is your result
  md-progress-spinner(md-mode='determinate', :md-value='result')
  |  {{ result }}%
  h3
    | You have answered right to {{ correctAnswers }} of {{ questions.length }} questions.
</template>

<script>
import { mapGetters } from 'vuex'
import UserService from '../services/User.service'

export default {
  data() {
    return {
      fakeAnswers: 3
    }
  },
  computed: {
    ...mapGetters(['questions', 'correctAnswers']),
    firstName: {
      get() {
        return UserService.storage.firstName
      }
    },
    result: {
      get() {
        return 100 / this.questions.length * this.correctAnswers;
      }
    }
  },
  created() {
    if (!UserService.storage.email || !UserService.storage.firstName) {
      this.$router.push('Accesserror');
      return;
    }
  }
}
</script>

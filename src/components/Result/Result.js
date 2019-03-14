import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      fakeAnswers: 3
    }
  },
  computed: {
    ...mapGetters(['questions', 'correctAnswers', 'email', 'firstName']),
    result: {
      get() {
        return 100 / this.questions.length * this.correctAnswers;
      }
    }
  },
  created() {
    if (!this.email || !this.firstName) {
      this.$router.push('accesserror');
      return;
    }
  }
}
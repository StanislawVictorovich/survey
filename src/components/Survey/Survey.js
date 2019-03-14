import { mapGetters, mapActions } from 'vuex'

export default {
  data(){
    return {
      id: null,
      active: null,
      progressPercents: null,
      selectedChiose: null,
      error: false
    }
  },
  computed: {
    ...mapGetters(['questions', 'correctAnswers', 'email', 'firstName']),
    progress: {
      get() {
        return this.progressPercents + this.progressLength;
      }
    },
    progressLength: {
      get() {
        return 100 / this.questions.length;
      }
    }
  },
  methods: {
    ...mapActions(['incrementCorrectAnswer']),
    nextStep(indexOfQuestion) {
      if (!this.selectedChiose) {
        this.error = true;
        return;
      }
      if (this.checkCorrectAnswer(indexOfQuestion)) {
        this.incrementCorrectAnswer();
      }
      if (indexOfQuestion >= this.questions.length - 1) {
        console.log('end of test... Routing...'); 
        console.log(this.correctAnswers);
        return;
      }
      this.incrementProgress();
      this.selectedChiose = null;
      this.active = this.getId(indexOfQuestion+1);
    },
    checkCorrectAnswer(indexOfQuestion) {
      return this.questions[indexOfQuestion].choises.indexOf(this.selectedChiose) === this.questions[indexOfQuestion].correct;
    },
    incrementProgress() {
      this.progressPercents += this.progressLength;
    },
    getId(index) {
        return `${this.id}${index}`;
    }
  },
  created() {
    if (!this.email || !this.firstName) {
      this.$router.push('accesserror');
      return;
    } 
    this.id = "surv";
    this.active = this.getId(0);
  }
}
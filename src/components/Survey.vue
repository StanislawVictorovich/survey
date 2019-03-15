<template lang="pug">
md-steppers(:md-active-step.sync='active', md-vertical='', md-linear='')
  md-progress-bar(md-mode='determinate', :md-value='progress')
  md-step(v-for='(question, index) of questions', :key='getId(index)', :id='getId(index)', :md-editable='false')
    h2(v-html='question.title')
    p
      md-radio(v-for='choise of question.choises', :key='choise', v-model='selectedChiose', :value='choise')
        | {{ choise }}
    md-button.md-raised.md-primary(@click='nextStep(index)') Continue
  md-snackbar(md-position='left', :md-duration='4000', :md-active.sync='error', md-persistent='')
    span Please select your choise!
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import UserService from '../services/User.service'

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
    ...mapGetters(['questions', 'correctAnswers']),
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
        this.$router.push('result');
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
    if (!UserService.storage.email || !UserService.storage.firstName) {
      this.$router.push('Accesserror');
      return;
    } 
    this.id = "surv";
    this.active = this.getId(0);
  }
}
</script>

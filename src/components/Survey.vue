<template lang="pug">
div
  md-button.md-raised.md-primary(@click="test()") Test
  md-progress-bar(md-mode="determinate", :md-value="progress")
  md-steppers(:md-active-step.sync="active", md-linear="")
    md-step(
      v-for="(question, index) of questions", 
      :key="getId(index)", 
      :id="getId(index)", 
      :md-error="stepError")
        h2(v-html="question.title")
        p
          md-radio(
            v-for="choise of question.choises", 
            :key="choise", 
            v-model="selectedChiose", 
            :value="choise") {{ choise }}
        md-button.md-raised.md-primary(@click="nextStep(index)") Continue
        md-snackbar(md-position="left", :md-duration="4000", :md-active.sync="error", md-persistent="")
          span Please select your choise!
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import storage from '../services/storage';
import constants from '../types/constants';

export default {
  data() {
    return {
      id: null,
      active: null,
      progressPercents: null,
      selectedChiose: null,
      error: false,
      stepError: null //this.stepError = 'Please, chose your answer!'
    }
  },
  computed: {
    ...mapGetters([constants.questions, constants.correctAnswers]),
    progress: {
      get() {
        return this.progressPercents + this.oneStepProgressPercent;
      }
    },
    oneStepProgressPercent: {
      get() {
        return 100 / this.questions.length;
      }
    }
  },
  methods: {
    ...mapActions([constants.incrementCorrectAnswer, constants.completeTest]),
    nextStep(indexOfQuestion) {
      if (!this.selectedChiose) {
        this.error = true;
        return;
      }
      if (this.checkCorrectAnswer(indexOfQuestion)) {
        this.incrementCorrectAnswer();
      }
      if (indexOfQuestion >= this.questions.length - 1) {
        this.completeTest();
        this.$router.push('Result');
        return;
      }
      this.incrementProgress();
      this.saveSurveySession();
      this.selectedChiose = null;
      this.active = this.getId(indexOfQuestion+1);
    },
    checkCorrectAnswer(indexOfQuestion) {
      return this.questions[indexOfQuestion].choises.indexOf(this.selectedChiose) === this.questions[indexOfQuestion].correct;
    },
    incrementProgress() {
      this.progressPercents += this.oneStepProgressPercent;
    },
    saveSurveySession() {
      storage.setUserData( { session: this.active } );
    },
    restoreSurveySession() {
      this.active = storage.getUserData().session;// || this.getId(constants.SURV_ID);
    },
    test() {
      console.log(this.active);
      this.active = constants.SURV_ID;
    },
    getId(index) {
        return `${this.id}${index}`;
    }
  },
  created() {
    try {
      storage.getUserData().email;
      storage.getUserData().firstName;
    } catch {
      this.$router.push('Accesserror');
    }
    this.id = 'surv',
    this.active = this.getId(0);
    this.restoreSurveySession();
  }
} 
</script>

<template lang="pug">
div
  md-progress-bar(md-mode="determinate", :md-value="progress")
  md-steppers(:md-active-step.sync="active", md-linear="")
    md-step(
      v-for="(question, index) of questions", 
      :key="getIdOfElementByIndex(index)", 
      :id="getIdOfElementByIndex(index)")
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
import { mapGetters } from 'vuex';
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
      survey: {
        currentStep: 0,
        answersMatrix: [],
        testComplete: false
      }
    }
  },
  computed: {
    ...mapGetters([constants.questions]),
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
    nextStep(indexOfQuestion) {
      if (!this.selectedChiose) {
        this.error = true;
        return;
      }
      this.survey.answersMatrix[indexOfQuestion] = this.questions[indexOfQuestion].choises.indexOf(this.selectedChiose);
      if (indexOfQuestion >= this.questions.length - 1) {
        storage.setUserData( { testComplete: true } );
        this.$router.push('Result');
        return;
      }
      this.survey.currentStep = indexOfQuestion + 1;
      storage.setUserData(this.survey);
      this.selectedChiose = null;
      this.active = this.getIdOfElementByIndex(this.survey.currentStep);
      this.updateProgress();
    },
    updateProgress() {
      this.progressPercents = storage.getUserData().currentStep * this.oneStepProgressPercent;
    },
    restoreSurveySession() {
      this.survey.currentStep = storage.getUserData().currentStep || 0;
      this.survey.answersMatrix = storage.getUserData().answersMatrix || [];
      this.survey.testComplete = storage.getUserData().testComplete || false;
      this.active = this.getIdOfElementByIndex(this.survey.currentStep || 0);
    },
    getIdOfElementByIndex(index) {
        return `${this.id}${index}`;
    }
  },
  created() {
    if(!storage.getUserData().email || !storage.getUserData().firstName || storage.getUserData().testComplete) {
      this.$router.push('Accesserror');
    }
    this.id = constants.SURV_ID;
    this.active = this.getIdOfElementByIndex(0);
    this.restoreSurveySession();
    this.updateProgress();
  }
} 
</script>

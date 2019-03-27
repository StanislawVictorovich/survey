<template lang="pug">
div
  md-progress-bar(md-mode="determinate", :md-value="progress")
  md-steppers(:md-active-step.sync="active", md-linear="")
    md-step(
      v-for="(question, index) of questions", 
      :key="getIdOfElementByIndex(index)", 
      :id="getIdOfElementByIndex(index)")
        h2(v-html="question.title"
      )
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
import userData from '../services/userdata';
import types from '../store/types';
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
    ...mapGetters([types.questions]),
    progress() {
        return this.progressPercents + this.oneStepProgressPercent;
    },
    oneStepProgressPercent() {
        return 100 / this.questions.length;
    }
  },
  methods: {
    ...mapActions([types.randomizeQuestions, types.saveQuestions, types.restoreQuestions]),
    nextStep(indexOfQuestion) {

      if (!this.selectedChiose) {
        this.error = true;
        return;
      }

      this.survey.answersMatrix[indexOfQuestion] = this.questions[indexOfQuestion].choises.indexOf(this.selectedChiose);

      if (indexOfQuestion >= this.questions.length - 1) {
        this.$router.push({ name: 'Result' });
      }

      this.survey.currentStep = indexOfQuestion + 1;
      [userData.currentStep, userData.answersMatrix, userData.testComplete] = [this.survey.currentStep, this.survey.answersMatrix, this.survey.testComplete];
      this.selectedChiose = null;
      this.active = this.getIdOfElementByIndex(this.survey.currentStep);
      this.updateProgress();
    },
    updateProgress() {
      this.progressPercents = userData.currentStep * this.oneStepProgressPercent || 0;
    },
    restoreSurveySession() {
      this.restoreQuestions();
      this.updateProgress();

      const { currentStep, answersMatrix, testComplete } = userData.getUserData();
      this.survey.currentStep = currentStep || 0;
      this.survey.answersMatrix = answersMatrix || [];
      this.survey.testComplete = testComplete || false;
      this.active = this.getIdOfElementByIndex(this.survey.currentStep || 0);
    },
    getIdOfElementByIndex(index) {
      return `${this.id}${index}`;
    }
  },
  created() {console.log(userData.getUserData());
     const { email, firstName, testComplete, questions } = userData.getUserData();

    if(!email || !firstName || testComplete) {
      this.$router.push({ name: 'Accesserror' });
    }

    if(!questions) {
      this.randomizeQuestions();
      this.saveQuestions();
    }

    this.id = constants.SURV_ID;
    this.active = this.getIdOfElementByIndex(constants.START_INDEX_ELEMENT);

    this.restoreSurveySession();
    this.updateProgress();
  }
} 
</script>

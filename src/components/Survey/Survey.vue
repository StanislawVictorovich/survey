<template>
  <md-steppers :md-active-step.sync="active" md-vertical md-linear>
    <md-progress-bar md-mode="determinate" :md-value="progress"></md-progress-bar>
    <md-step 
      v-for="(question, index) of questions"
      :key="getId(index)"
      :id="getId(index)"
      :md-editable="false">
        <h2 v-html="question.title"></h2>
      <md-button class="md-raised md-primary" @click="nextStep(index)">Continue</md-button>      
    </md-step>
    <md-button class="md-primary md-raised" @click="test">test</md-button>
  </md-steppers>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

  export default {
    data(){
      return {
        id: null,
        active: null,
        progressPercents: null
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
      ...mapActions(['incrementCorrectAnswers']),
      nextStep(index) {
        if (index >= this.questions.length - 1) {
          console.log('end of test... Routing...'); 
          return;
        }
        this.incrementProgress();
        this.active = this.getId(index+1);
      },
      incrementProgress() {
        this.progressPercents += this.progressLength;
      },
      getId(index) {
          return `${this.id}${index}`;
      },      
      async test(){/* console.log(this.currentStep, this.questions.length);
        console.log(await this.nextStep());
        console.log(this.first, this.second, this.third, this.fourth, this.fifth); */
        this.incrementCorrectAnswers();
        console.log(this.correctAnswers);
      }
    },
    created() {
      this.id = "surv";
      this.active = this.getId(0);
    }
  }
</script>

<style lang="scss" scoped>

</style>

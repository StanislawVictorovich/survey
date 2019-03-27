<template lang="pug">
div
  md-button(@click='showUsers') Back to users
  .md-layout.md-gutter
    .md-layout-item
      p
        span.md-display-2  {{ user.firstName }} {{ user.lastName }} 
      p
        span.md-headline  {{ user.email }} 
      p
        span.md-headline  Born in {{ new Date(user.date) | formatDate }} 
    .md-layout-item
      span.md-display-1 Your results: 
      md-progress-spinner(
        :md-diameter='90', 
        :md-stroke='20', 
        md-mode='determinate', 
        :md-value='result'
      )
      | {{ result }}%
      h3  You have answered right to {{ correctAnswers }} of {{ questions.length }} questions.
  p
    span.caption  The results of a close examination of javascript are given below.
  md-table.table(
    :md-height='350', 
    v-model='questions', 
    md-sort-order='asc', 
    md-fixed-header=''
  )
    md-table-toolbar
      h1.md-title Questions
    md-table-row(slot='md-table-row', slot-scope='{ item }')
      md-table-cell(md-label='Title', v-html='item.title')
      md-table-cell(md-label='Choises')
        md-list
          md-list-item(
            v-for='(choise, index) of item.choises', 
            :key='choise'
          )
            md-radio(
              v-model='item.choises[getUsersAnswerByQuestionsId(item.id)]', 
              disabled='', :value='choise'
            )
              md-chip.md-accent(v-if='item.correct === index')
                span.md-body-2 {{ choise }}
              div(v-else='')
                span.md-body-2 {{ choise }}
</template>


<script>
import { mapGetters } from 'vuex';
import usreData from '../services/userdata';
import types from '../store/types';
import formatDate from '../filters/formatDate';

export default {
  data() {
    return {
      user: usreData.users[this.$route.params.id] || [],
      correctAnswers: 0,
      radio: ''
    }
  },
  computed: {
    ...mapGetters([types.questions]),
    result() {
      return Math.floor(100 / this.questions.length * this.correctAnswers);
    }
  },
  methods: {
    getCorrectAnswerByQuestionsId(id){
      return this.questions.filter(item => item.id === id)[0].correct;
    },
    getUsersAnswerByQuestionsId(id){
      return this.user.answersMatrix[this.user.questionsIdMatrix.indexOf(id)];
    },
    calculcateCorrectAnsers() {
      for (const [i, item] of this.questions.entries()) {       

        if (item.correct === this.user.answersMatrix[i]) {
          this.correctAnswers += 1;
        } 
      }
    },
    showUsers() {
      this.$router.push({ name: 'Users' });
    }
  },
  created() {
    this.calculcateCorrectAnsers();
  },
  filters: formatDate
}
</script>

<style lang="scss" scoped>

</style>

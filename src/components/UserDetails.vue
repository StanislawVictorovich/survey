<template>
  <div>
    <md-button @click="showUsers">Back to users</md-button>
     <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <p><span class="md-display-2"> {{ user.firstName }} {{ user.lastName }} </span></p>
        <p><span class="md-headline"> {{ user.email }} </span></p>
        <p><span class="md-headline"> Born in {{ new Date(user.date) | formatDate }} </span></p>
      </div>
      <div class="md-layout-item">
        <span class="md-display-1">Your results: </span>
        <md-progress-spinner md-mode="determinate" :md-value="result"></md-progress-spinner>{{ result }}%
        <h3>You have answered right to {{ correctAnswers }} of {{ questions.length }} questions.</h3>
      </div>
    </div> 
    <p><span class="caption"> The results of a close examination of javascript are given below.</span></p>
    <md-table v-model="questions" md-sort-order="asc" md-fixed-header class="table">
      <md-table-toolbar>
        <h1 class="md-title">Questions</h1>
      </md-table-toolbar>
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Title" v-html="item.title"></md-table-cell>
        <md-table-cell md-label="Choises">
          <md-list>
            <md-list-item v-for="(choise, index) of item.choises" :key="choise">
              <md-radio 
                v-model="item.choises[getUsersAnswerByQuestionsId(item.id)]" 
                disabled 
                :value="choise"> 
                <md-chip 
                  class="md-accent" 
                  v-if="item.correct === index">
                    {{ choise }}
                </md-chip> 
                <div v-else>
                  {{ choise }}
                </div>
              </md-radio>
            </md-list-item>
          </md-list>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
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

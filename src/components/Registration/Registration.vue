<template>
  <div class="registration">

    <md-field :class="messageClass">
      <label>First name</label>
      <md-input v-model="firstName" required @keydown="hasMessages = false"></md-input>
      <span class="md-error">First name is required</span>
    </md-field>

    <md-field>
      <label>Last name</label>
      <md-input v-model="lastName" ></md-input>
    </md-field>

    <md-datepicker v-model="date">
      <label>Select your birth date</label>
    </md-datepicker>

    <md-button class="md-primary md-raised" @click="submit">Start</md-button>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    name: 'ErrorsMessages',
    data(){
      return {
        firstName: null,
        lastName: null,
        date: null,
        hasMessages: false
      }
    },
    computed: {
      messageClass () {
        return {
          'md-invalid': this.hasMessages
        }
      }
    },
    methods: {
      ...mapActions(['saveFirstName', 'saveLastName', 'saveDate']),
      submit() {
        if (this.firstName) {
          this.saveFirstName(this.firstName);
          this.saveLastName(this.lastName);
          this.saveDate(this.date);
          this.$router.push('survey');
        } else {
          this.hasMessages = true;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .registration {
    margin: 2em;
  }
</style>

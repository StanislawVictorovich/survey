<template lang="pug">
.registration
  md-field(:class='messageClass')
    label First name
    md-input(v-model='firstName', required='', @keydown='hasMessages = false')
    span.md-error First name is required
  md-field
    label Last name
    md-input(v-model='lastName')
  md-datepicker(v-model='date')
    label Select your birth date
  md-button.md-primary.md-raised(@click='submit') Start
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

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
    ...mapGetters(['email']),
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
  },
  created() {
    if (!this.email) {
      this.$router.push('Accesserror');
    } 
  }
}
</script>

<style lang="scss" scoped>
.registration {
  margin: 2em;
}
</style>

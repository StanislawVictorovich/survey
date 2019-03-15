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
import storage from '../services/storage';

export default {
  data() {
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
    submit() {
      if (this.firstName) {
        storage.setData('firstName', this.firstName);
        storage.setData('lastName', this.lastName);
        storage.setData('date', this.date);
        this.$router.push('survey');
      } else {
        this.hasMessages = true;
      }
    }
  },
  created() {
    if (!storage.getData('email')) {
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

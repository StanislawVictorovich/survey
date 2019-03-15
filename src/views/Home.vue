<template lang="pug">
div
  md-dialog-prompt(:md-active.sync='active', v-model='email', md-title='Enter your email', md-input-maxlength='30', md-input-placeholder='Type your email...', md-confirm-text='Done', @md-confirm='confirm')
  md-button.md-primary.md-raised(@click='active = true')
    | Start
  md-snackbar(md-position='left', :md-duration='4000', :md-active.sync='error', md-persistent='')
    span
      | Please enter a valid email address!
</template>

<script>
import { regEmail } from '../constants'
import UserService from '../services/User.service'

export default {
  name: 'home',
  data(){
    return {
      active: false,
      error: false,
      email: null
    }
  },
  methods: {
    validEmail() {
      return regEmail.test(this.email);
    },
    confirm() {
      if (this.validEmail()) {
        UserService.storage.email = this.email;
        this.$router.push('registration');
      } else {
        this.error = !this.validEmail();
      }
    }
  }
}
</script>

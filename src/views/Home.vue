<template lang="pug">
div
  md-dialog-prompt(
    :md-active="active", 
    v-model="email", 
    md-title="Enter your email", 
    md-input-maxlength="30", 
    md-input-placeholder="Type your email...", 
    md-confirm-text="Done", 
    @md-confirm="confirm" 
    @md-cancel="cancel"
)
  md-button.md-primary.md-raised(@click="active = true") Start
  md-snackbar(
    md-position="left", 
    :md-duration="4000", 
    :md-active.sync="error", 
    md-persistent="")
    span Please enter a valid email address!
</template>

<script>
import constants from '../types/constants';
import storage from '../services/storage';

export default {
  name: 'home',
  data() {
    return {
      active: false,
      error: false,
      email: null
    }
  },
  computed: {
    validEmail() {
      return constants.regEmail.test(this.email);
    }
  },
  methods: {
    confirm() {

      if (this.validEmail) {
        storage.setUserData({ email: this.email });
        this.$router.push({ name: 'Registration'});
      } else {
        this.error = !this.validEmail;
        this.active = true;
      }

    },
    cancel() {
      this.active = false;
    }
  }
}
</script>

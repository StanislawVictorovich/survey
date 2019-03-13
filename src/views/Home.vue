<template>
  <div>
    <md-dialog-prompt
      :md-active.sync="active"
      v-model="email"
      md-title="Enter your email"
      md-input-maxlength="30"
      md-input-placeholder="Type your email..."
      md-confirm-text="Done" 
      @md-confirm="confirm"
      />
    <md-button class="md-primary md-raised" @click="active = true">Start</md-button>
    <md-snackbar 
      md-position="left" 
      :md-duration="4000" 
      :md-active.sync="error" 
      md-persistent>
      <span>Please enter a valid email address!</span>
    </md-snackbar>
  </div>
</template>

<script>
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
        const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regEmail.test(this.email);
      },
      confirm() {
        if (this.validEmail()) {
          this.$router.push({ path: 'about' });
        } else {
          this.error = !this.validEmail();
        }
      }
    }
  }
</script>
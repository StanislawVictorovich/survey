import { mapActions } from 'vuex'
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
      ...mapActions(['saveEmail']),
      validEmail() {
        const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regEmail.test(this.email);
      },
      confirm() {
        if (this.validEmail()) {
          this.saveEmail(this.email);
          this.$router.push('registration');
        } else {
          this.error = !this.validEmail();
        }
      }
    }
  }
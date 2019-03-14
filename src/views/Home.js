import { mapActions } from 'vuex'
import { regEmail } from '../constants'

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
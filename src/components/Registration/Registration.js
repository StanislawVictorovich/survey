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
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
      this.$router.push('accesserror');
    } 
  }
}
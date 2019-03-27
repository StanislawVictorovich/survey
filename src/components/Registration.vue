<template lang="pug">
md-card.md-layout-item.md-size-50.md-small-size-100
  md-card-header
    .md-title Registration
  md-card-content
    .registration
      md-field(:class="messageClass")
        label First name
        md-input(
          v-model="firstName", 
          required="", 
          @keydown="showErrorHint = false"
        )
        span.md-error First name is required
      md-field
        label Last name
        md-input(v-model="lastName")
      md-datepicker(v-model="date")
        label Select your birth date
      md-button.md-primary.md-raised(@click="submit") Start
</template>

<script>
import userData from '../services/userdata';

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      date: '',
      showErrorHint: false
    }
  },
  computed: {
    messageClass () {
      return {
        'md-invalid': this.showErrorHint
      }
    }
  },
  methods: {
    submit() {

      if (this.firstName) {
        [userData.firstName, userData.lastName, userData.date] = [this.firstName, this.lastName, this.date];
        this.$router.push({ name: 'Survey' });
      } else {
        this.showErrorHint = true;
      }

    }
  },
  created() {

    if (!userData.email) {
      this.$router.push({ name: 'Accesserror' });
    }

  }
}
</script>

<style lang="scss" scoped>
.md-layout-item {
  margin: 0 0 20% 20%;
}
</style>

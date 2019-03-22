<template lang="pug">
md-card.md-layout-item.md-size-50.md-small-size-100
  md-card-header
    .md-title Registration
  md-card-content
    .registration
      md-field(:class="messageClass")
        label First name
        md-input(
          v-model="user.firstName", 
          required="", 
          @keydown="showErrorHint = false"
         )
        span.md-error First name is required
      md-field
        label Last name
        md-input(v-model="user.lastName")
      md-datepicker(v-model="user.date")
        label Select your birth date
      md-button.md-primary.md-raised(@click="submit") Start
</template>

<script>
import storage from '../services/storage';

export default {
  data() {
    return {
      user: {
        firstName: null,
        lastName: null,
        date: null
      },
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

      if (this.user.firstName) {
        storage.setUserData(this.user);
        this.$router.push({ name: 'Survey' });
      } else {
        this.showErrorHint = true;
      }

    }
  },
  created() {
    const { email } = storage.getUserData();

    if (!email) {
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

<template lang="pug">
div
  md-button(@click='newUser') Go to new registration
  br
  md-card(md-with-hover='', v-for='(user, index) in users', :key='user.email')
    md-ripple
      md-card-header
        .md-title  {{ user.firstName }} 
        .md-subhead  {{ user.email }} 
      md-card-content
        | Born in {{ new Date(user.date) | formatDate }}.
      md-card-actions
        md-button(@click='showDetails(index)') Details
</template>

<script>
import userData from '../services/userdata';
import formatDate from '../filters/formatDate';

export default {
  data() {
    return {
      users: userData.users || []
    }
  },
  methods: {
    showDetails(index) {
      this.$router.push({ name: 'UserDetails', params: { id: index } });
    },
    newUser() {
      this.$router.push({ name: 'Home' });
    }
  },
  filters: formatDate
}
</script>

<style lang="scss">
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>

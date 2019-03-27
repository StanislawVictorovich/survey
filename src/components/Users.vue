<template>
  <div>
    <md-button @click="newUser">Go to new registration</md-button><br>
    <md-card md-with-hover v-for="(user, index) in users" :key="user.email">
      <md-ripple>
        <md-card-header>
          <div class="md-title"> {{ user.firstName }} </div>
          <div class="md-subhead"> {{ user.email }} </div>
        </md-card-header>

        <md-card-content>
          Born in {{ new Date(user.date) | formatDate }}.
        </md-card-content>

        <md-card-actions>
          <md-button @click="showDetails(index)">Details</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
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

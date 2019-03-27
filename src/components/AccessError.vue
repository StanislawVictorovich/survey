<template lang="pug">
div
  span.md-display-3 You are not allowed to visit this page!
  p 
    md-button.md-primary(@click="goBack") Go back
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
};
</script>

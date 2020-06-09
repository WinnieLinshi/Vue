<template>
  <img src="../assets/NotFound.jpg" @click="routerToHome" />
</template>
<style>
img {
  width: 100%;
  height: 100%;
}
</style>>

<script>
export default {
  methods: {
    routerToHome: function() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
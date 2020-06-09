<template>
  <div id="app">
    <top />
    <router-view />
    <down />
  </div>
</template>

<script>
import down from "@/components/footer";
import top from "@/components/header";

export default {
  mounted() {
    this.$store.dispatch("fetchArticles");
  },
  components: {
    top,
    down
  }
};
</script>
<style scoped>
#app {
  background-color: #f5f7f9;
}
</style>

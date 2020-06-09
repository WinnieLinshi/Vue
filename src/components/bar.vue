<template>
  <Card title="All Article" icon="ios-options" shadow>
    <CellGroup v-for="(art,index) in articles" :key="index">
      <Cell :title="art.title" :to="'article/'+art.id" />
    </CellGroup>
  </Card>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["articles"]),
    routerToArticle: function(id) {
      this.$router.push({ name: "Article", params: { id: id } });
    }
  }
};
</script>
<style scoped>
card {
  width: 100%;
}
</style>
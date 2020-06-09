<template>
  <Row>
    <Col span="18">
      <div class="home">
        <article v-for="(ar,index) in filterBySearchKey" :key="index">
          <h3 @click="routerToArticle(ar.id)">{{ar.title}}</h3>
          <i>{{ar.date | toDate}}</i>
          <span>{{ar.content | subContent}}</span>
        </article>
      </div>
    </Col>
    <Col span="6">
      <bar />
    </Col>
  </Row>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import bar from "@/components/bar";
import axios from "axios";
export default {
  computed: {
    ...mapState(["articles"]),
    ...mapGetters(["filterBySearchKey"])
  },
  filters: {
    subContent: content => {
      return content.substring(0, 200).replace(/<br>/g, "");
    },
    toDate: timestamp => {
      const date = new Date(timestamp);
      return date;
    }
  },
  methods: {
    routerToArticle: function(id) {
      this.$router.push({ name: "Article", params: { id: id } });
    }
  },
  components: {
    bar
  }
};
</script>
<style lang="scss" scoped>
article {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  margin: 2rem 5rem;
  background-color: white;
  border-radius: 15px;
}
i {
  color: #6e6e6e;
}
</style>
<template>
  <article v-if="articles">
    <h2>{{filterById.title}}</h2>
    <br />
    <i>{{filterById.date | toDate}}</i>
    <span v-html="filterById.content"></span>
  </article>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  created() {
    const id = this.$route.params.id;
    this.artid = id;
  },
  data() {
    return {
      artid: null
    };
  },
  computed: {
    ...mapState(["articles"]),
    filterById: function() {
      //art 為自定義變數 後面art.id用來指定articles的id項選擇，而陣列選取第0個原因為filter會出全部等於條件的只拿第一個
      return this.articles.filter(art => art.id == this.artid)[0];
    }
  },
  filters: {
    toDate: timestamp => {
      const date = new Date(timestamp);
      return date;
    }
  }
};
</script>
<style lang="scss" scoped>
article {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 30px 500px;
  background-color: white;
  padding: 50px 30px;
  border-radius: 100px;
}
i {
  color: #6e6e6e;
}
</style>
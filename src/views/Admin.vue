<template>
  <div class="Admin">
    <Table :columns="columns1" :data="articles"></Table>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      columns1: [
        {
          title: "ID",
          key: "id"
        },
        {
          title: "Title",
          key: "title"
        },
        {
          title: "Content",
          key: "content"
        },
        {
          title: "Date",
          key: "date"
        }
      ]
    };
  },
  computed: {
    ...mapState(["articles"])
  }
};
</script>

<template>
  <div class="about">
    <h1>命名衝突</h1>
    中括號的調用：{{ test }}
    <br />
    <button @click="test">＠click的調用：因命名衝突沒作用!</button>
    <br />
    <img src="../assets/bug.png" style="width:800px;" />
    <br />
    <br />
    <br />
    <h1>slot</h1>
    <slotExample>I'm a easy slot Example!</slotExample>
    <br />
    <br />
    <br />
    <h1>Vuex</h1>
    <p>search和文章取值使用</p>
    <img src="../assets/vuex.png" style="width:800px;" />
  </div>
</template>
<style scoped>
div {
  text-align: center;
}
body {
  background-image: url("../assets/about.png");
}
</style>
<script>
import slotExample from "@/components/slotExample";
export default {
  data() {
    return {
      test: "顯示了data的值"
    };
  },
  methods: {
    test: function() {
      alert("hi");
    }
  },
  components: {
    slotExample
  }
};
</script>
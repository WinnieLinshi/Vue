<template>
  <Menu mode="horizontal" theme="dark" active-name="1">
    <div class="layout-logo">Winnie's Blog</div>
    <div class="layout-nav">
      <MenuItem to="/" name="1">
        <Icon type="ios-navigate"></Icon>Home
      </MenuItem>
      <MenuItem to="/login" name="2">
        <Icon type="ios-analytics"></Icon>Login
      </MenuItem>
      <MenuItem to="/about" name="3">
        <Icon type="ios-analytics"></Icon>演示
      </MenuItem>
    </div>
    <Input
      search
      placeholder="Search"
      style="width: auto"
      v-model="searchKey"
      @on-search="submitSearchKey"
    />
  </Menu>
</template>
<script>
import { mapActions } from "vuex"; //既定寫法

export default {
  data() {
    return {
      searchKey: ""
    };
  },
  methods: {
    ...mapActions(["changeSearchKey"]),

    submitSearchKey: function() {
      this.changeSearchKey(this.searchKey);
    }
  },
  watch: {
    //監聽
    searchKey: function() {
      if (this.searchKey == "") {
        this.submitSearchKey();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.layout-logo {
  float: left;
  color: black;
  font-weight: bold;
  font-size: 30px;
  margin-left: 50px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
}
</style>  

<template>
  <div>
    <form action="/" class="ipt">
      <van-search class="search" v-model="value" @click="onSearch" shape="round" />
    </form>
  </div>
</template>
<script>
import Vue from "vue";
import { Search } from "vant";
Vue.use(Search);
export default {
  components: {},
  data() {
    return {
      value: "搜索我的尖叫好物"
    };
  },
  methods: {
    onSearch() {
      this.$router.push("/search");
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
body,
html {
  width: 100%;
  height: 100%;
}
.ipt {
  display: flex;
  padding: 10px 0;
}
.search {
  width: 70% !important;
  margin-left:10px;
}
</style>
<template>
  <div>
    <div>
      <form action="/" class="ipt">
        <img :src="logo" class="logo" />
        <van-search class="search" v-model="value" @click="onSearch" shape="round" />
      </form>
    </div>
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
      logo: "https://m.wowdsgn.com/static/img/titleView.png",
      value: "搜索我的尖叫好物"
    };
  },
  methods: {
    onSearch() {
        this.$router.push('/search')
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
}
.logo {
  width: 75px;
  height: 20px;
  margin: 5px 5px 0 10px;
}
</style>
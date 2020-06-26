<template>
  <div>
    <form action="/" class="ipt">
      <van-search class="search" v-model="value" shape="round" />
      <i class="iconfont icon-home" @click="handleClick"></i>
    </form>
    <!-- <Crazylab></Crazylab> -->
    <div>
      <p>热门搜索</p>
      <ul>
        <router-link
          tag="li"
          v-for="data of datalist"
          :key="data.index"
          :to="data.path"
        >{{data.text}}</router-link>
      </ul>
    </div>
    <div class="history">
      <p>历史搜索</p>
       <span>{{name}}</span>
    </div>
    
  </div>
</template>
<script>
import Vue from "vue";
import { Search } from "vant";
Vue.use(Search);
import Crazylab from "@/views/Search/Crazylab";
export default {
  components: {
    Crazylab
  },
  data() {
    return {
      value: "搜索我的尖叫好物",
      name:"张三",
      datalist: [
        {
          text: "尖叫实验室",
          path: "/search/crazylab"
        },
        {
          text: "暖手宝",
          path: "/search/crazylab"
        },
        {
          text: "沙发",
          path: "/search/crazylab"
        },
        {
          text: "杯子",
          path: "/search/crazylab"
        },
        {
          text: "餐具",
          path: "/search/crazylab"
        },
        {
          text: "茶具",
          path: "/search/crazylab"
        },
        {
          text: "吊灯",
          path: "/search/crazylab"
        },
        {
          text: "厨房",
          path: "/search/crazylab"
        },
        {
          text: "儿童",
          path: "/search/crazylab"
        }
      ]
    };
  },
  methods: {
    handleClick() {
      this.$router.push("/");
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
  justify-content: space-around;
  i {
    font-size: 30px;
  }
}
.search {
  width: 70% !important;
}
ul {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  text-align: center;
  li {
    width: 22%;
    height: 36px;
    line-height: 36px;
    margin: 10px 0;
    background: #f5f5f5;
  }
}
p{
  margin:10px 0 0 10px;
}
.history{
  margin-left:10px;
}
</style>
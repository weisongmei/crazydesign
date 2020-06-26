<template>
  <div class="classified">
    <Search></Search>
    <div>
      <img :src="imgUrl" />
      <div
        v-for="data of datalist"
        :key="data.categoryId"
        class="classification"
        @click="handleClick"
      >
        <span>{{data.name}}</span>
        <i class="iconfont icon-next"></i>
      </div>
    </div>
  </div>
</template>
<script>
import Search from "@/components/Search";
import axios from "axios";
export default {
  components: {
    Search
  },
  data() {
    return {
      imgUrl: "https://m.wowdsgn.com/static/img/furniture.png",
      picUrl: "https://m.wowdsgn.com/static/img/household.png",
      datalist: []
    };
  },
  mounted() {
    axios
      .get(
        "http://www.mei.com/appapi/silo/navigationAll/v3?timestamp=1583639570323&summary=d2b6ad928768e594851ec6f845c040f3"
      )
      .then(res => {
        //  console.log(res.data.lists)
        this.datalist = res.data.lists;
      });
  },
  methods: {
    handleClick() {
      this.$router.push("");
    }
  }
};
</script>
<style lang="scss" scoped>
body,
html {
  width: 100%;
  height: 100%;
}
.classified {
  padding: 0 15px 50px;
}
img {
  display: block;
  width: 345px;
  height: 115px;
  text-align: center;
}
.classification {
  display: flex;
  height: 50px;
  justify-content: space-between;
  border-bottom: 1px solid #f5f5f5;
  text-align: center;
  line-height: 50px;
  i {
    color: #6b6969;
  }
}
</style>
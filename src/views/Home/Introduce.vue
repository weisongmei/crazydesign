<template>
  <div>
    <Swiper>
      <div class="swiper-slide" v-for="data of datalist" :key="data.id">
        <img :src="data.bannerImgSrc" />
      </div>
    </Swiper>
    <div class="imgSize">
      <div v-for="item of arrlist" :key="item.id">
        <img :src="item.picUrl" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Swiper from "@/components/Swiper";
export default {
  mounted() {
    axios
      .get("/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1583409564055")
      .then(res => {
        this.datalist = res.data.data.modules[0].moduleContent.banners;

        axios
          .get(
            "http://www.mei.com/appapi/panicbuying/intro?timestamp=1583569837216&summary=cc5e62b3f43d1b54ba58fe1b3b1e064c"
          )
          .then(res => {
            this.arrlist = res.data.data.productList;
          });
      });
  },
  components: {
    Swiper
  },
  data() {
    return {
      datalist: [],
      arrlist: []
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
html,
body {
  width: 100%;
}
.swiper-slide {
  img {
    width: 100%;
    height: 276px;
  }
}
.imgSize {
  display: flex;
  flex-wrap: wrap;
}
img {
  width: 184px;
  height: 125px;
}
</style>
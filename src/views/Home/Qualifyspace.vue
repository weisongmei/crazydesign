<template>
  <div>
    <Swiper>
      <div class="swiper-slide" v-for="data of datalist" :key="data.id">
        <img :src="data.bannerImgSrc" />
      </div>
    </Swiper>
    <div class="imgSize">
      <div v-for="item of arrlist" :key="item.id" >
      <img :src="item.imageUrl" />
    </div>
    <Bottom></Bottom>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Swiper from "@/components/Swiper";
import Bottom from "@/components/Bottom";
export default {
  mounted() {
    axios
      .get(
        "/v2/page?pageId=1&tabId=10005&currentPage=1&pageSize=8&_=1583506250364"
      )
      .then(res => {
        this.datalist = res.data.data.modules[0].moduleContent.banners;
      });
    axios
      .get(
        "http://www.mei.com/appapi/silo/eventForH5?categoryId=cosmetics&pageIndex=1&timestamp=1583587070898&summary=3f3e530264b5ae6308fe33847ea27db7&platform_code=H5"
      )
      .then(res => {
        this.arrlist = res.data.eventList;
        console.log(this.arrlist);
      });
    // axios.get(
    //     "/v2/page?pageId=1&tabId=10005&currentPage=1&pageSize=8&_=1583587603713"
    //   )
    //   .then(res => {
    //     this.arrlist = res.data.data.modules[1];
    //     console.log(this.arrlist);
    //   }); 尖叫设计，待以后在改
  },
  components: {
    Swiper,
    Bottom
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
.swiper-slide {
  img {
    width: 100%;
  }
}
.imgSize {
  height:186px;
  display:flex;
  flex-wrap:wrap;
  img {
    width: 186px;
    height: 186px;
  }
}
</style>
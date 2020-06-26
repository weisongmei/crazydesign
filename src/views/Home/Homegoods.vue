<template>
    <div>
      <Swiper>
         <div class="swiper-slide" v-for="data of datalist" :key="data.id" >
           <img :src="data.bannerImgSrc" >
         </div>
      </Swiper>
      <div class="imgSize">
         <div v-for="item of arrlist" :key="item.id" >
             <img :src="item.imageUrl" />
         </div>
      </div>
    </div>
</template>
<script>
import axios from 'axios'
import Swiper from '@/components/Swiper'
export default {
  mounted(){
   var bannersData= axios.get('/v2/page?pageId=1&tabId=10006&currentPage=1&pageSize=8&_=1583507485043').then(res=>{
    // console.log(res.data.data.modules[0].moduleContent.banners)
      this.datalist=res.data.data.modules[0].moduleContent.banners    
    })
     axios
      .get(
        "http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=1&timestamp=1583590800830&summary=bb6faf005072d4d7760edeb135685a4d&platform_code=H5"
      )
      .then(res => {
        this.arrlist = res.data.eventList;
        console.log(this.arrlist);
      });


  },
  components: {
   Swiper
  },
  data() {
    return {
   datalist:[],
   arrlist:[]
    }
  },
  methods: {

  }
};
</script>
<style lang="scss" scoped>
.swiper-slide{
  img{
    width:100%;
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
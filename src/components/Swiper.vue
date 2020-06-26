<template>
    <div>
       <div class="swiper-container" >
          <div class="swiper-wrapper">
            <slot></slot>
            <!-- <div class="swiper-pagination"></div> -->
          </div> 
        </div> 
    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  mounted(){
      var mySwiper = new Swiper ('.swiper-container', {
          loop: true, // 循环模式选项
          autoplay:true,
          // 如果需要分页器
          // pagination: {
          //   el: '.swiper-pagination',
          // },
        
        })        

    },

  //  mounted(){
  //   new Swiper("."+(this.kerwinclass?this.kerwinclass:'swiper-container'),
  //   this.kerwindata)
  // }
  components: {},
  data() {
    return {
    }
  },
  methods: {

  }
};
</script>
<style lang="scss" scoped>

</style>
<template>
  <div>
    <Bottomtabbar></Bottomtabbar>
    <transition name="app" mode="out-in">
      <router-view></router-view>
    </transition>
   
  </div>
</template>
<script>

import Bottomtabbar from '@/components/Bottomtabbar' 
export default {
  components:{
    Bottomtabbar
  }
}
</script>
<style lang="scss">
 .app-enter-active{
   animation: aaa .5s;
 }
 .app-leave-active{
  animation: aaa .5s reverse;
 }
 @keyframes aaa{
    0% {
      opacity: 0;
      transform: translateY(100px);
    }

    100% {
      opacity: 1;
      transform: translateX(0px);
    }
 }
</style>

<template>
  <div>
     <Toptabbar></Toptabbar>
     <Navbar></Navbar>
     <router-view></router-view>
  </div>
</template>
<script> 

import Toptabbar from '@/components/Toptabbar' 
import Navbar from '@/components/Navbar'
export default {
  components: {
    Toptabbar,
    Navbar,
  },
  
  data() {
    return {
    
    };
  },
  methods: {

  }
};
</script>
<style lang="scss" scoped>

</style>
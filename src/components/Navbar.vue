<template>
    <div>
        <ul>
            <router-link tag="li" v-for="data in datalist" 
            :key="data.id" :to="data.path" activeClass="active">
                <span>{{data.text}}</span>
                </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            datalist:[
                {
                id:1,
                 text:"推荐",
                 path:'/home/introduce'
                    },
                {id:2,
                    text:"品质空间",
                    path:'/home/qualifyspace'
                    },
                {id:3,
                    text:"居家好物",
                    path:'/home/homegoods'
                },
            ],
        }       
    }
}
</script>
<style lang="scss" scoped>
  ul{
      width:100%;
      height:44px;
      display:flex;
      li{
          flex:1;
          text-align:center;
          line-height:44px;
        span{
           border-bottom:2px solid transparent;
        }
      }
  }
  .active{
      color:red;
      border-bottom:2px solid red;
  }
</style>
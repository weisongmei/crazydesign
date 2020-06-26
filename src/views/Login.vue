<template>
  <div class="loginpage">
    <div class="login">
      <router-link to="/home/introduce" tag="div">
        <i class="iconfont icon-home"></i>
      </router-link>
      <div class="bold">登录</div>
      <div @click="handleClick">注册</div>
    </div>
    <div class="select">
      <ul v-show="mytext">
        <li v-for="data of datalist" :key="data.id">{{data.text}}</li>
      </ul>
        <div class="register">
           <p>请输入手机号</p>
           <p class="pass">请输入密码
             <span>忘记密码 ?</span>
           </p>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      mytext: true,
      datalist: [
        { id: 1, text: "密码登录" },
        { id: 2, text: "短信登录" }
      ]
    };
  },
  methods: {
    handleClick() {
      this.$router.push("/register");
    }
  }
};
</script>
<style lang="scss" scoped>
.loginpage {
 background: #f5f5f5;
}

 
.login {
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  line-height: 48px;
  background: white;
  .bold {
    font-weight: 900;
    font-size: 20px;
  }
  i {
    font-size: 30px;
  }
}
.select {
  width: 345px;
  height: 144px;
  // border: 1px solid red;
  margin: 10px auto;
  ul {
    display: flex;
    text-align: center;
    li {
      flex: 1;
      color: #808080;
      border-bottom:1px solid transparent;
    }
  }
}
.register{
  padding:1px 10px;
  color:#EAEAEA;
  .pass{
    display: flex;
    justify-content: space-between;
    border-top:#808080;
    span{
      color:#000
    }
  }
}
</style>
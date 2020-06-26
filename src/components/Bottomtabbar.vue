<template>
  <div class="botton">
    <ul>
      <router-link
        tag="li"
        v-for="data of datalist"
        :key="data.text"
        :to="data.path"
        activeClass="select"
      >
        <i class="iconfont" :class="data.icon"></i>
        <span>{{data.text}}</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      datalist: [
        {
          path: "/",
          text: "首页",
          icon: "icon-home"
        },
        {
          path: "/classification",
          text: "分类",
          icon: "icon-menu"
        },
        {
          path: "/shopcar",
          text: "购物车",
          icon: "icon-cart"
        },
        {
          path: "/message",
          text: "消息",
          icon: "icon-message"
        },
        {
          path: "/my",
          text: "我的",
          icon: "icon-nickname"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.botton {
  width: 100%;
  height: 50px;
  background: white;
  position: fixed;
  left: 0;
  bottom: 0;
}
ul {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  line-height: 50px;
  li {
    list-style: none;
    flex: 1;
    text-align: center;
    line-height: 20px;
    span {
      display: block;
    }
    .iconfont {
      font-size: 30px;
    }
  }
}
.select {
  color: red;
}
</style>
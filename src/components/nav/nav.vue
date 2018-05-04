<template>
    <div v-show="($store.state.path=='/home'||$store.state.path=='/posion')" class="nav">
        <div class="nav_box">
            <div class="box" @click="ta('home')">
                <icon name="home" :color="counter=='home'?'#fff':'#0088CC'"></icon>
                <p :style="counter=='home'?'color:#fff':'color:#0088CC'">首页</p>
            </div>
            <div class="box" @click="ta('posion')">
                <icon name="user" :color="counter=='posion'?'#fff':'#0088CC'"></icon>
                <p :style="counter=='posion'?'color:#fff':'color:#0088CC'">个人中心</p>
            </div>
            <!-- <div class="box"  @click="ta('user')">
                <img>
                <p>12</p>
            </div>
            <div class="box"  @click="ta('App')">
                <img>
                <p>12</p>
            </div>
            <div class="box"  @click="ta('ceshi')">
                <img>
                <p>12</p>
            </div>
            <div class="box"  @click="ta('com')">
                <img>
                <p>12</p>
            </div> -->
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      counter: "home",
      path: ""
    };
  },
  methods: {
    ta: function(ea) {
      console.log(ea);
      this.counter = ea;
      let ab = ea;
      this.$router.push({path:ab})
      this.$emit("increment", ab);
    }
  },
  mounted: function() {
    this.path = this.$route.path;
  }
};
</script>
<style lang="less" scoped>
.nav {
  width: 10rem;
  height: 53px;
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 6px 0;
  box-sizing: border-box;
  background-color: #42464f;
  .nav_box {
    display: flex;
    width: 100%;
    height: 41px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    .box {
      width: 50%;
      height: 100%;
      text-align: center;

      .fa-icon {
        width: 30px;
        height: 30px;
        display: inline-block;
        padding: 0;
        margin: 0;
      }
      p {
        height: 15px;
      }
    }
  }
}
</style>

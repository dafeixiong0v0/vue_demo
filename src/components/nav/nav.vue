<template>
    <div class="nav">
        <div class="nav_box">
            <div class="box" @click="ta('home')">
                <img>
                <p>12</p>
            </div>
            <div class="box" @click="ta('about')">
                <img>
                <p>12</p>
            </div>
            <div class="box"  @click="ta('user')">
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
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        counter:''
    };
  },
  methods: {
      ta:function (ea) {
          console.log(ea)
          this.counter=ea;
          let ab=ea
          this.$emit('increment',ab);
       }
  }
};
</script>
<style lang="less" scoped>
.nav {
  width: 10rem;
  height: 50px;
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  .nav_box {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    .box {
      width: 50%;
      height: 100%;
      text-align: center;
      img{
          width: 30px;
          height: 30px;
          display: inline-block;
          padding: 0;
          margin: 0;
          margin-top: 5px;
      }
      p{
          height: 15px;
      }
    }
  }
}
</style>

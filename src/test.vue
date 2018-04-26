<template>
  <div id="app">
    <!-- <div>
      <input type="text" v-model="test">
      <div class="wrap">
        <div>
          hello vue
          <h1>
            {{msg}}
          </h1>
        </div>
      </div>
      <header> -->
        <!-- router-link 定义点击后导航到哪个路径下 -->
        <!-- <router-link to="/home">Home</router-link> -->
        <!-- <router-link to="/about">About</router-link> -->

        <!--  增加两个到user组件的导航，可以看到这里使用了不同的to属性 -->
        <!-- <router-link to="/user/123">User123</router-link>
        <router-link to="/user/456">User456</router-link>
        <router-link to='/login/index'>12</router-link>
        <router-link to='/ceshi'>132</router-link>
        <span @click='$goRoute()'>我是函数式导航</span>
      </header>
    </div> -->

    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view></router-view>
    <!-- <div class="test">
      <p>当前路径：{{$route.path}}</p>
      <p>当前参数：{{$route.params | json}}</p>
      <p>路由名称：{{$route.name}}</p>
      <p>路由查询参数：{{$route.query | json}}</p>
      <p>路由匹配项：{{$route.matched | json}}</p>
    </div> -->
  </div>

</template>


<script>
export default {
  name: "app",
  data() {
    return {
      msg: "asdfasdfasfasfasf",
      bolLOG: true,
      test: "121"
    };
  },
  watch: {
    test: function(val, ab) {
      console.log(ab);
    }
  },
  methods: {
    routerGG: function() {
      console.log(1212, this.$route);
      this.$router.path({ path: "home" });
    }
  },
  mounted:function(){
    if(localStorage.getItem('name')!=''){
      setTimeout(()=>{
        this.$router.push({path:'/HomePage'}) ;
      },5000)
          
    }
  }
};
</script>
<style lang="less">
.wrap {
  width: 100px;
  //   height: 50px;
  background-color: #0fedb0;
  h1 {
    color: red;
  }
}
.test {
  position: fixed;
  top: 100px;
  right: 110px;
  width: 300px;
  height: 600px;
  p {
    width: 100%;
  }
}
</style>


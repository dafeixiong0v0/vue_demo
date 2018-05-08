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
    <!-- {{$route.path}} -->
    <!-- {{($store.state.path=='/home'||$store.state.path=='/posion')}} -->
    <router-view></router-view>
    <nav-botton v-on:increment="po"></nav-botton>
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
import com from "./com";
import user from "./user";
import about from "./about";
import ceshi from "./ceshi";
import App from "./App";
import home from "./home";

export default {
  components: {
    com,
    home,
    App,
    ceshi,
    about,
    user
  },
  name: "app",
  data() {
    return {
      msg: "asdfasdfasfasfasf",
      bolLOG: true,
      test: "121",
      prop: "home",
      path:''
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
    },
    po(data) {
      console.log(data);
      this.prop = data;
    }
  },
  mounted: function() {
    console.log(this.$route.path,this.$store.state.path);
    this.path=this.$route.path;
    this.$store.state.path=this.path
    if (localStorage.getItem("name") != "") {
      setTimeout(() => {
        this.$router.push({ path: "/" });
      }, 5000);
    }
  },
  watch:{
    path:function(a,b){
      console.log(a,b)
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


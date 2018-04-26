import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "./home.vue";
import about from "./about.vue";
import user from "./user.vue"
import login from "./login"
import aabb from "./ceshi"
// 要告诉 vue 使用 vueRouter
Vue.prototype.$goRoute = function () {
    this.$router.push({ path: "home" })
}
Vue.use(VueRouter);

// const routes = [
//     {
//         path:"/home",
//         component: home
//     },
//     {
//         path: "/about",
//         component: about
//     }
// ]
const routes=[
    {
        path:"/home",
        component: home
    },
    {
        path: "/about",
        component: about
    },
    {
        path: "/ceshi",
        component: aabb
    },
    /*新增user路径，配置了动态的id*/
    {
        path: "/user/:id",
        component: user
    },
    {
        path: "/login/index",
        component: login
    },
    // 重定向
    // redirect 方法将根路径重定向到/login/index路径：
    {
        path: '/',
        redirect:{ path:'/login/index' },
        component: login
      },
    // {
    //     path: './', 
    //     redirect: '/login/index' 
    // }
]
var router =  new VueRouter({
    routes
})
export default router;
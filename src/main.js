import Vue from 'vue'//引入vue文件
import tt from './test.vue'
import router from "./router.js"

// 开启错误提示
Vue.config.debug = true;
new Vue({
  el: '#app',
  router,  // 注入到根实例中
  render: h => h(tt)
})
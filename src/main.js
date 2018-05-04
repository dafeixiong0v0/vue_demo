import Vue from 'vue'//引入vue文件
import tt from './test.vue'
import router from "./router.js"
import store from './vuex/index.js'
import Vuex from 'vuex'
import './assets/js/taobaoflex.js'
import './assets/js/flexible_css'
import "./assets/css/index.css"
import NavBotton from '../src/components/nav/nav.vue';
import topheader from './components/topheader/index.vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
console.log(store)
Vue.component('icon',Icon);
Vue.component('NavBotton',NavBotton);
Vue.component('topheader',topheader);
// 开启错误提示
Vue.config.debug = true;

new Vue({
  el: '#app',
  router,
  store, // 注入到根实例中
  render: h => h(tt)
})
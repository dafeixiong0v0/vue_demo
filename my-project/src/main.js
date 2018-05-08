import Vue from 'vue'//引入vue文件
import tt from './test.vue'
import router from "./router.js"
import store from './vuex/index.js'
import Vuex from 'vuex'
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;
// 公用js
import './assets/js/taobaoflex.js'
import './assets/js/flexible_css'
import "./assets/css/index.css"
import './assets/js/JQuery.min.js'

// 公用组件
import NavBotton from '../src/components/nav/nav.vue';
import topheader from './components/topheader/index.vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import operationBotton from './components/operation/index'




// console.log(store)
Vue.component('icon',Icon);
Vue.component('NavBotton',NavBotton);
Vue.component('topheader',topheader);
Vue.component('operationBotton',operationBotton);
Vue.prototype.testa=false;
// Vue.prototype.$http = axios;
// 开启错误提示
Vue.config.debug = true;

new Vue({
  el: '#app',
  router,
  store, // 注入到根实例中
  render: h => h(tt)
})
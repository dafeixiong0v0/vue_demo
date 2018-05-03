import Vue from 'vue'//引入vue文件
import tt from './test.vue'
import router from "./router.js"
import './assets/js/taobaoflex.js'
import './assets/js/flexible_css'
import "./assets/css/index.css"
import NavBotton from '../src/components/nav/nav.vue';
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon',Icon);
Vue.component('NavBotton',NavBotton);
// 开启错误提示
Vue.config.debug = true;
new Vue({
  el: '#app',
  router,  // 注入到根实例中
  render: h => h(tt)
})
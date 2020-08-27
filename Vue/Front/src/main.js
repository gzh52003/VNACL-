import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import request from './utils/request';


import 'element-ui/lib/theme-chalk/index.css';
// import VueRouter from 'vue-router';

Vue.use(ElementUI);

// 通过原型链的共享Ajax请求的方法
Vue.prototype.$request = request


new Vue({
  // 注入实列
  router,
  render: h => h(App),
}).$mount('#app')
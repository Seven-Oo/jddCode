import Vue from 'vue';
import dayjs from 'dayjs';
import hotkeys from 'hotkeys-js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import Mock from './mock/index';

import App from './App.vue';
import { router } from './router';
import './router/routeHooks';
import store from './store';
import star from './utils/drawStar';

// 自动注册
import '@/components/autoRegister';
// iconfont 使用ln2-作为前缀
import '@/styles/index.less';

Vue.config.productionTip = false;
Vue.prototype.$dayjs = dayjs;
Vue.prototype.$hotkeys = hotkeys;

// axios.defaults.baseURL = 'http://58.87.95.232:3000/mock/11/';
axios.defaults.baseURL = 'http://mockjs.com/api';
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

Vue.use(ElementUI);

// 鉴于过滤器在Vue3被取消了,这里不再添加过滤器
// eventBus在Vue3被取消,不再使用eventBus

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

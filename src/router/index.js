import Vue from 'vue';
import Router from 'vue-router';
import homeRouter from '@/router/modules/homeRouter';

Vue.use(Router);

const routes = [
  homeRouter,
];

// 新建路由
const createRouter = () => new Router({
  // mode: 'history', // 需要服务端支持
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes,
});
// 创建路由
const router = createRouter();

// 重置路由,参考链接 https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

// 解决路由在 push/replace 了相同地址报错的问题
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};
export { router, createRouter, resetRouter };

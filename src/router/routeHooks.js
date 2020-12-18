// 路由守卫
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { router } from './index';

// 路由守卫
router.beforeEach(async (to, from, next) => {
  NProgress.start();
  next();
  NProgress.done();
});

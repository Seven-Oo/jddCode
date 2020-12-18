import LayoutMain from '@/layout/LayoutMain/index.vue';

const homeRouter = {
  path: '/',
  component: LayoutMain,
  children: [
    {
      path: '',
      name: 'home',
      component: () => import('@/views/Home/index.vue'),
    },
    {
      meta: {
        title: '产品中心',
      },
      path: 'productCenter',
      name: 'ProductCenter',
      component: () => import('@/views/ProductCenter/index.vue'),
    },
    {
      meta: {
        title: '解决方案',
      },
      path: 'solution',
      name: 'Solution',
      component: () => import('@/views/Solution/index.vue'),
    },
    {
      meta: {
        title: '产业AI中心',
      },
      path: 'AiCenter',
      name: 'AiCenter',
      component: () => import('@/views/AiCenter/index.vue'),
    },
    {
      meta: {
        title: '产品动态',
      },
      path: 'dynamicCondition',
      name: 'DynamicCondition',
      component: () => import('@/views/DynamicCondition/index.vue'),
    },
    {
      meta: {
        title: '关于我们',
      },
      path: 'about',
      name: 'About',
      component: () => import('@/views/About/index.vue'),
    },
  ],
};

export default homeRouter;

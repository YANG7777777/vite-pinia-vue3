import { createRouter, createWebHistory } from 'vue-router';

import Layout from '@/layout/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Layout,
      redirect: '/home/index',
      children: [
        {
          path: 'index', // 相对路径
          name: 'home', // 确保唯一
          component: () => import('../views/HomeView.vue'),
        },
      ],
    },
  ],
});

export default router;
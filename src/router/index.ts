import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/store';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: { requiresAuth: true },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth) {
    if (authStore.accessToken) {
      next();
    } else {
      next('/');
    }
  } else {
    next();
  }
});

export default router

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DEMO_MASTER from './_demo-master'
import DEMO_CESIUM from './_demo-cesium'
export const routes: Array<RouteRecordRaw> = [
  ...DEMO_CESIUM,
  ...DEMO_MASTER,
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('_v/home.vue'),
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL + '/'),
  routes,
})

export default router
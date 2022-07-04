import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import voieRoutes from '~pages'
import Layout from '@/layout/admin/index.vue'
import RouterViewWrapper from '_c/RouterViewWrapper/index.vue'
import DEMO_CESIUM from './_demo-cesium'
export const routes: Array<RouteRecordRaw> = [
  ...DEMO_CESIUM,
  {
    path: '/',
    redirect: '/_demo-cesium',
    meta: {
      hidden: true,
    },
  },

  ...voieRoutes,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL + '/'),
  routes,
})

export default router
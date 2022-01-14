import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import DEMO_MASTER from './_demo-master'
// import DEMO_EL_PLUS from './_demo-el-plus'
import DEMO_EL_PLUS__ADMIN from './_demo-el-plus.admin'
export const routes: Array<RouteRecordRaw> = [
  // ...DEMO_EL_PLUS,
  // ...DEMO_MASTER,
  ...DEMO_EL_PLUS__ADMIN,
  {
    path: '/',
    redirect: '/_demo-el-plus.admin/demo1/c1/c2',
    meta: {
      hidden: true,
    },
  },
  {
    path: '/home',
    component: () => import('_v/home.vue'),
    meta: {
      hidden: true,
    },
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL + '/'),
  routes,
})

export default router
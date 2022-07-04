import { RouteRecordRaw } from 'vue-router'
export default [
  {
    path: '/_demo-el-plus',
    component: () => import('_v/_demo-el-plus/index.vue'),
  },
  {
    path: '/_demo-el-plus/form',
    component: () => import('_v/_demo-el-plus/form.vue'),
  },
] as RouteRecordRaw[]
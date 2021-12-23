import { RouteRecordRaw } from 'vue-router'
export default [
  {
    path: '/_demo-cesium',
    component: () => import('_v/_demo-cesium/index.vue'),
  },
] as RouteRecordRaw[]
import { RouteRecordRaw } from 'vue-router'
export default [
  {
    path: '/_demo-cesium',
    component: () => import('_v/_demo-cesium/index.vue'),
  },
  {
    path: '/_demo-cesium/mars3d',
    component: () => import('_v/_demo-cesium/mars3d.vue'),
  },
] as RouteRecordRaw[]
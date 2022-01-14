import { RouteRecordRaw } from 'vue-router'
import AdminLayout from '@/layout/admin/index.vue'
export default [
  {
    path: '/_demo-el-plus.admin',
    component: AdminLayout,
    meta: {
      title: '系统admin Parent',
    },
    children: [
      { 
        path: 'a', 
        meta: {
          title: '系统admin',
        },
        component: () => import('_v/_demo-el-plus.admin/index.vue'),
      },
    ],
  },

  {
    path: '/_demo-el-plus.admin/demo1',
    component: AdminLayout,
    meta: {
      title: '系统admin demo1',
    },
    children: [
      { 
        path: 'c1', 
        meta: {
          title: '系统admin c1',
        },
        component: () => import('_v/_demo-el-plus.admin/demo1/c1/index.vue'),
        children: [
          { 
            path: 'c2', 
            meta: {
              title: '系统admin c2',
            },
            component: () => import('_v/_demo-el-plus.admin/demo1/c2/index.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/_demo-el-plus.admin/home',
    component: AdminLayout,
    children: [
      {
        path: '',
        component: () => import('_v/_demo-el-plus.admin/home/index.vue'),
        meta: {
          title: '主页',
        },
      },
    ],
  },
] as RouteRecordRaw[]
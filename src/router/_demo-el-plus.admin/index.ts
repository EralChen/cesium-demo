import { RouteRecordRaw } from 'vue-router'
import AdminLayout from '@/layout/admin/index.vue'
export default [
  {
    path: '/_demo-el-plus.admin',
    component: AdminLayout,
    children: [
      { 
        path: '', 
        meta: {
          title: '系统admin',
        },
        component: () => import('_v/_demo-el-plus.admin/index.vue'),
      },
    ],
  },
] as RouteRecordRaw[]
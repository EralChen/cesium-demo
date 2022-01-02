import { RouteRecordRaw } from 'vue-router'
import AdminLayout from '@/layout/admin/index.vue'
export default [
  {
    path: '/_demo-el-plus.admin',
    component: AdminLayout,
    children: [
      { path: '', 
        component: () => import('_v/_demo-el-plus.admin/index.vue'),
      },
    ],
  },
] as RouteRecordRaw[]
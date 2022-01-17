<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import NavLink from '../nav-link/index.vue'
export default defineComponent({
  name: 'AdminLayoutNavLinkTree',
  components: {
    NavLink,
  },
  props: {
    baseUrl: { // 对于叶子节点来说, 需要 将父节点的 fullPath 作为 baseUrl 再拼接 path 作为跳转路径 
      type: String,
      default: '',
    },
    level: {
      type: Number,
      default: 1,
    },
    data: {
      type: Array as PropType<RouteRecordRaw[]>,
      default: () => [],
    },
  },
  methods: {
    getFullPath (path: string, pPath?: string) {
      return path.startsWith('/') ? path : (pPath || this.baseUrl) + '/' + path
    },

    hasChildren (route: RouteRecordRaw) {
      return !!route.children?.length
    },

    mergeRoute (pRoute: RouteRecordRaw):RouteRecordRaw  {
      // 合并 只有一个儿子 的 route
      if (!pRoute.children || pRoute.meta?.alwaysShow) return pRoute
      const routes = pRoute.children.filter(item => !item.meta?.hidden)
      if (routes.length === 1) {
        let only = routes[0]
        only = {
          ...only,
          path: this.getFullPath(only.path, pRoute.path),
          meta: only.meta,
          children: only.children,
        }
        if (only.children?.length) { //如果这个route 还有children
          return this.mergeRoute(only)
        }
        return only  
      } else {
        return pRoute
      }
    },

    * genRoutes (routes: RouteRecordRaw[]) {
      for (const route of routes) {
        yield this.mergeRoute(route)
      }
    },
  },
})
</script>
<template>
  <ul class="admin-layout-nav-link-ul" :class="`level${level}`">
    <!-- 如果meta中有hidden为true, 则隐藏该条  -->
    <template v-for="item of genRoutes(data)" :key="item.path">
      <li 
        v-if="!item.meta?.hidden" 
        class="admin-layout-nav-link-li" 
      >
        <!-- 叶子节点可导航, 叶子节点不需要body -->
        <NavLink 
          :to="getFullPath(item.path)" 
          :linkable="!hasChildren(item)"
          :hidden-body="!hasChildren(item)"
        >
          <template #title>
            <span class="admin-layout-nav-link-label">
              {{ item.meta?.title}}
            </span>
          </template>
          <template #body>
            <AdminLayoutNavLinkTree 
              :data="item.children"
              :baseUrl="getFullPath(item.path)"
              :level="level+1"
            ></AdminLayoutNavLinkTree>
          </template>

        </NavLink>
      </li>
    </template>

  </ul>


</template>
<style>
.admin-layout-nav-link-ul .vk-collapse-body-x{
  margin-left: var(--gap-s);
}
.admin-layout-nav-link-ul a.is-exact-active{
  color: var(--c-text-active);
  background: var(--c-bg-active)
}
.admin-layout-nav-link-label, .admin-layout-nav-link{
  display: block;
  width: 100%;  
}
</style>
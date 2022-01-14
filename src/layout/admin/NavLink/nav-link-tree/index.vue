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
    getFullPath (path: string) {
      return path.startsWith('/') ? path : this.baseUrl + '/' + path
    },

    hasChildren (route: RouteRecordRaw) {
      return !!route.children?.length
    },
  
    getOnlyChildInfo (pRoute: RouteRecordRaw): Partial<RouteRecordRaw> | undefined {
      // 如果一个route仅有一个可用路由，则合并这个route，用于渲染
      if (pRoute.meta?.alwaysShow) return
      if (!pRoute.children) return
      const routes = pRoute.children.filter(item => !item.meta?.hidden)
      if (routes.length === 1) {
        const theOnly = routes[0]
        if (!theOnly.children?.length) { // 如果这个route 没有children
          return {
            path: theOnly.path,
            component: theOnly.component,
            meta: theOnly.meta,
          }
        }
      }
       
    },
  },
})
</script>
<template>
  <ul class="admin-layout-nav-link-ul" :class="`level${level}`">
    <!-- 如果meta中有hidden为true, 则隐藏该条  -->
    <template v-for="item of data" :key="item.path">
      <li 
        v-if="!item.meta?.hidden" 
        class="admin-layout-nav-link-li" 
      >
        <NavLink 
          :only-child="getOnlyChildInfo(item)"
          :to="getFullPath(item.path)" 
          :linkable="!hasChildren(item)"
          :hidden-body="!hasChildren(item)"
        >
          <template #title="{onlyChild}">
            <span class="admin-layout-nav-link-label">
              {{ onlyChild?.meta?.title || item.meta?.title}}
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
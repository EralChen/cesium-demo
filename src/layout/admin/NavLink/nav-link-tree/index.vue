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
          :to="getFullPath(item.path)" 
          :event="!item.children?.length ? 'click': ''"
          :hidden-body="!item.children?.length"
        >
          <template #title>
            <span class="admin-layout-nav-link-label">{{item.meta?.title}}
            {{ !item.children?.length }}
          </span></template>
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
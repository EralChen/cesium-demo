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
    level: {
      type: Number,
      default: 1,
    },
    data: {
      type: Array as PropType<RouteRecordRaw[]>,
      default: () => [],
    },
  },
  emits: {
    'update:children-show': (e: boolean) => e || true,
  },
  setup () {
    return {}
  },
})
</script>
<template>
  <ul class="admin-layout-nav-link-ul" :class="`level${level}`">
    <!-- 如果meta中有hidden为true, 则隐藏该条  -->
    <template v-for="item of data" :key="item.path">
      <li v-if="!item.meta?.hidden" class="admin-layout-nav-link-li">
        <NavLink :to="item.path">
          <template #title> <span >{{item.meta?.title}}</span> </template>
          <AdminLayoutNavLinkTree 
            v-if="item.children?.length" 
            :data="item.children"
            :level="level+1"
          ></AdminLayoutNavLinkTree>
        </NavLink>
      </li>
    </template>

  </ul>
</template>

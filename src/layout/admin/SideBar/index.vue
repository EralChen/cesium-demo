<script lang="ts">
import { defineComponent } from 'vue'
import { useRoutesStore } from '@/store/routes'
export default defineComponent({
  setup () {
    const { routes } = useRoutesStore()
    return {
      routes,
    }
  },
})
</script>
<template>
  <!-- 这里需要把 可用的 路由树遍历成侧边栏 -->
  <!-- 一些信息会被存放在路由的元信息里 -->
  <ul class="layout-admin-side-bar">
    <template v-for="item of routes" :key="item.path">
      <!-- 如果meta中有hidden为true, 则隐藏该条  -->
      <router-link v-if="!item.meta?.hidden" :to="item.path" custom>
        <template #default="{ route, navigate, isActive, isExactActive }">
          <li @click="navigate" class="layout-admin-side-bar-li" :class="{
            'is-active': isActive,
            'is-exact-active': isExactActive
          }">
            {{route.meta.title}}
          
          </li>
        </template>
      </router-link>
    </template>
  </ul>
</template>
<style>
.layout-admin-side-bar-li{
  cursor: pointer;
}
.layout-admin-side-bar{
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
}
.layout-admin-side-bar-li.is-exact-active{
  color: var(--c-primary);
}
</style>
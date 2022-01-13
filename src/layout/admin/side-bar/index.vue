<script lang="ts">
import { computed, defineComponent } from 'vue'
import NavLinkTree from '../NavLink/nav-link-tree/index.vue'
import { useRoutesStore } from '@/store/routes'
export default defineComponent({
  components: {
    NavLinkTree,
  },
  setup () {
    const routesStore = useRoutesStore()
    const routes = computed(() => routesStore.routes)
    return {
      routes,
    }
  },
})
</script>
<template>
  <div class="admin-layout-side-bar">
    <NavLinkTree :data="routes">
    </NavLinkTree>
  </div>
</template>
<style>
.admin-layout-side-bar{
  width: 100%;
  height: 100%;
  background: darkseagreen;
}
</style>
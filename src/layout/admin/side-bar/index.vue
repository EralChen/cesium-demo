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
.admin-layout-side-bar {
  --c-bg: #f0f0f0;
  --c-hover-bg: #f0f0f0;

  --c-dir: #9f9f9f;

  --c-text: #171719;
  --c-text-active: #f0f0f0;
  --c-bg-active: #4059f2;
}
</style>
<style lang="scss">
.admin-layout-side-bar{
  width: 100%;
  height: 100%;
  color: var(--c-text);
  .admin-layout-nav-link{
    padding-left: .3em;
    line-height: 1.75;
    border-radius: 4px;
    margin-top: .2em;
    margin-bottom: .2em;
    &:not(.is-active):hover{
      background-color: var(--c-hover-bg);
    }
  }
  .vk-collapse-header-x.is-dir{
    color: var(--c-dir);
  }
}
</style>
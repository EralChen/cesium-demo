<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router'
export type ViewRoute = Omit<RouteLocationNormalizedLoaded, 'redirectedFrom' | 'matched'>
export default defineComponent({
  setup () {
    const route = useRoute()
    const visitedViews = ref<Record<string, ViewRoute>>({})
    
    watch(route, (v) => {
      const doc = JSON.parse(JSON.stringify({
        fullPath: v.fullPath,
        hash: v.hash,
        meta: v.meta,
        params: v.params,
        name: v.name,
        query: v.query,
        path: v.path,
      })) as ViewRoute
      visitedViews.value[doc.fullPath] = doc
    }, { immediate: true })

    return {
      visitedViews,
    }
  },
})
</script>
<template>
  <ul class="layout-admin-header-link-ul" sk-flex="row">
    <li v-for="(item, key) of visitedViews" :key="key">
      <router-link :to="item.fullPath">
        {{ item.meta.title }}
      </router-link> 
    </li>
  </ul>
</template>
<style lang="scss">
.layout-admin-header-link-ul{
  background-color: var(--c-bg);
  padding: .5em;
  li{
    padding: .1em .4em;
    border: 1px solid var(--c-border);
  }
  > * + * {
    margin-left: var(--gap-xxs);
  }
}
</style>
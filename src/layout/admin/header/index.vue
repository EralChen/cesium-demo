<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRoute, RouteLocationNormalizedLoaded, useRouter } from 'vue-router'
type ViewRoute = Omit<RouteLocationNormalizedLoaded, 'redirectedFrom' | 'matched'>
export default defineComponent({
  setup () {
    const route = useRoute()
    const router = useRouter()
    const visitedViews = ref<Map<string, ViewRoute>>(new Map())
    
    watch(route, (v) => {
      const doc = JSON.parse(JSON.stringify({
        fullPath: v.fullPath.endsWith('/') ? v.fullPath.slice(0, -1) : v.fullPath,
        hash: v.hash,
        meta: v.meta,
        params: v.params,
        name: v.name,
        query: v.query,
        path: v.path,
      })) as ViewRoute
      visitedViews.value.set(doc.fullPath, doc)
    }, { immediate: true })

    const delVisitedViews = (key: string, isExactActive: boolean) => {
      visitedViews.value.delete(key)
      if (isExactActive) {
        const pre = [...visitedViews.value][visitedViews.value.size - 1][1]
        router.push(pre)
      }
    }

    return {
      visitedViews,
      delVisitedViews,
    }
  },
})
</script>
<template>
  <ul class="layout-admin-header-link-ul" sk-flex="row">
    <li v-for="([key, item]) of visitedViews" :key="key">
      <router-link :to="item.fullPath">
        <template #default="{ isExactActive  }">
          {{ item.meta.title }}
          <button @click.prevent="delVisitedViews(key, isExactActive)">错</button>
        </template>

      </router-link> 

    </li>
  </ul>
</template>
<style lang="scss">
.layout-admin-header-link-ul{
  background-color: var(--c-bg);
  padding: .5em;
  li{
    a{
      border-radius: 4px;
      display: block;
      border: 1px solid var(--c-border);
      padding: .2em .4em;
      &.router-link-exact-active{
        color: var(--ic-content);
        background: var(--c-info);
      }
    }
  }
  > * + * {
    margin-left: var(--gap-xxs);
  }
}
</style>
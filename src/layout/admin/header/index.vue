<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router'

export default defineComponent({
  setup () {
    const route = useRoute()
    const visitedViews = ref<Record<string, RouteLocationNormalizedLoaded>>({})
    
    watch(route, (v) => {
      const doc = JSON.parse(JSON.stringify(v)) as RouteLocationNormalizedLoaded
      visitedViews.value[doc.fullPath] = doc
    }, { immediate: true })

    return {
      visitedViews,
    }
  },
})
</script>
<template>
  <ul class="test-ul" sk-flex="row">
    <li v-for="item of visitedViews" :key="item.fullPath">
      <router-link :to="item.fullPath">{{ item.meta.title }}</router-link> 
    </li>
  </ul>
</template>
<style>
.test-ul{
  background-color: gold;
}
</style>
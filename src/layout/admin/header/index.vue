<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router'

export default defineComponent({
  setup () {
    // const router = useRouter() 
    const route = useRoute()
    const visitedViews = ref<RouteLocationNormalizedLoaded[]>([])
    
    watch(route, (v) => {
      visitedViews.value.push(
        JSON.parse(JSON.stringify(v)),
      )
      
    }, { immediate: true })

    return {
      visitedViews,
    }
  },
})
</script>
<template>
  <ul class="test-ul">
    <li v-for="item of visitedViews" :key="item.fullPath">
      {{ item.meta.title }}
    </li>
  </ul>
</template>
<style>
.test-ul{
  background-color: gold;
}
</style>
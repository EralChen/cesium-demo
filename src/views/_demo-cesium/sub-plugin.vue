<script lang="ts">
import { defineComponent, inject } from 'vue'
import { Map } from 'mars3d'
export default defineComponent({
  setup () {
    const map = inject<Map>('vumaMap')
    if (!map) throw new Error()
    const viewer = map.viewer
    console.log(viewer, map)
    return {}
  },
})
</script>
<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { VumViewer, VumSkyBasemap } from 'vuesium'
export default defineComponent({
  components: {
    VumViewer,VumSkyBasemap,
  },
  setup () {
    return {}
  },
})
</script>
<template>
  <VumViewer>
    <VumSkyBasemap></VumSkyBasemap>
  </VumViewer>
</template>

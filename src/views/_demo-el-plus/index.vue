<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import {getOrgTree} from '@/api/demo'
export default defineComponent({
  setup () {
    onMounted(() => {
      getOrgTree()
    })
    return {}
  },
})
</script>
<template>
  <div>el</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup () {
    const name = 'cx'
    return {
      name,
    }
  },
})
</script>
<template>
  <div>baseCard</div>
  <div>{{name}}</div>
</template>

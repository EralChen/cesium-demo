<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    demos: {
      type: Object,
      default: () => ({})
    },
    source: {
      type: String,
      default: ''
    },
    path:  {
      type: String,
      default: ''
    },
    rawSource: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  setup () {
    return {}
  }
})
</script>
<template>
  <div> {{ source }} </div>
</template>

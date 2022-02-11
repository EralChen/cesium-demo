<script lang="ts">
import { defineComponent } from 'vue'
import SourceCode from './SourceCode/index.vue'
export default defineComponent({
  components: {
    SourceCode,
  },
  props: {
    demos: {
      type: Object,
      default: () => ({}),
    },
    source: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      default: '',
    },
    rawSource: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
  setup () {
    return {}
  },
})
</script>
<template>
  <SourceCode :source="source"></SourceCode>
</template>

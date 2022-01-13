<script lang="ts">
import { defineComponent, ref } from 'vue'
import { VkCollapse } from 'vunk'
export default defineComponent({
  components: {
    VkCollapse,
  },
  setup () {
    const show = ref(false)
    return {
      show,
    }
  },
})
</script>
<template>
  <VkCollapse v-model="show">

    <template #header>
      <slot name="header"></slot>
    </template>

    <template #body>
      <slot name="body"></slot>
    </template>

  </VkCollapse>
</template>

<script lang="ts">
import { defineComponent, onActivated, onMounted, ref, onDeactivated } from 'vue'
export default defineComponent({
  setup () {
    const keepScrollXNode = ref<HTMLDivElement>(null)
    const scrollTop = ref(0)
    const saveScrollTop = () => {
      if (keepScrollXNode.value) {
        scrollTop.value = keepScrollXNode.value.scrollTop
      }
    }
    const putScrollTop = () => {
      if (keepScrollXNode.value) {
        keepScrollXNode.value.scrollTop = scrollTop.value
      }
    }
    
    onMounted(() => {
      saveScrollTop()
    })
    onDeactivated(() => {
      saveScrollTop()
    })
    onActivated(() => {
      putScrollTop()
    })
    return {
      keepScrollXNode,
    }
  },
})
</script>
<template>
  <div class="keep-scroll-x" ref="keepScrollXNode">
    <slot></slot>
  </div>
</template>
<style>
.keep-scroll-x{
  height: 100%;
  overflow: auto;
}
</style>

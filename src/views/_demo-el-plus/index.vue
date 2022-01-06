<script lang="ts">
import { setRootStyle } from '@/utils/root'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup () {
    const color = ref('')
    const changeColor = (color: string) => {
      setRootStyle({
        '--c-primary': color,
      })
    }
    return {
      color,
      changeColor,
    }
  },
})
</script>
<template>
  <el-color-picker v-model="color" show-alpha  @change="changeColor" />
  <p class="test">home</p>
</template>
<style>
.test{
  color: var(--c-primary);
}
</style>

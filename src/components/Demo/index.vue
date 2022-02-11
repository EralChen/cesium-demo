<script lang="ts">
import { defineComponent, ref } from 'vue'
import SourceCode from './SourceCode/index.vue'
import { VkCollapse } from 'vunk'
import demos from '@/demos'
export default defineComponent({
  components: {
    SourceCode,
    VkCollapse,
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
  async setup (props) {
    const codeShow = ref(false)
    const c = (await demos[props.path]()).default
    return {
      codeShow,
      c,
    }
  },
})
</script>
<template>
  <!-- 想办法加载对对应路径下的组件 -->
  <Component :is="c"></Component>

  <!-- show code  -->
  <VkCollapse v-model="codeShow">
    <template #header>
      点击
    </template>
    <template #body>
      <SourceCode :source="source"></SourceCode>
    </template>
  </VkCollapse>

</template>

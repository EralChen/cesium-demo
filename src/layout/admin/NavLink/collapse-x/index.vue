<script lang="ts" setup>
import { ref } from 'vue'
import { VkCollapse } from 'vunk'
import RightTriangle from './RightTriangle/index.vue'
defineProps({
  icon: {
    type: Boolean,
    default: true,
  },
})
const show = ref(false)
</script>
<template>
  <VkCollapse v-model="show" class="admin-layout-nav-link-collapse-x">

    <template #header>
      <RightTriangle 
        v-if="icon" 
        :class="{
          'is-active': show
        }"
        :size="'1.2em'"
      ></RightTriangle>
      <slot name="header"></slot>

    </template>

    <template #body>
      <slot name="body"></slot>
    </template>

  </VkCollapse>
</template>
<style lang="scss">
.admin-layout-nav-link-collapse-x{
  .vk-collapse-header-x{
    display: flex;
    align-items: center;
  }
  .vk-svg-right-triangle{
    transition: transform .1s ease-in;
    &.is-active{
      transform: rotate(90deg);
    }
  }
}
</style>

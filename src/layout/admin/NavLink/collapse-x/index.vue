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

      <!-- <svg 
        v-if="icon"
        viewBox="0 0 1024 1024" 
        xmlns="http://www.w3.org/2000/svg" 
        class="vk-svg-right-arrow" 
        :class="{
          'is-active': show
        }"
      >
        <path 
          d="M236.552013 926.853955a55.805997 55.805997 0 0 0 0 80.454996 59.682997 59.682997 0 0 0 82.794996 0l468.099978-455.081978a55.805997 55.805997 0 0 0 0-80.453996L319.348009 16.689999a59.682997 59.682997 0 0 0-82.794996 0 55.805997 55.805997 0 0 0 0 80.454996L663.401993 511.999975 236.624013 926.853955z"
          fill="currentColor"
        ></path>
      </svg> -->
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

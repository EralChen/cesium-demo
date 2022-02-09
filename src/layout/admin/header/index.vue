<script lang="ts" setup>
import { inject } from 'vue'
import VisitedViews from './visited-views/index.vue'
import Hamburger from '_c/Hamburger/index.vue'
import { sBreakpoints, Breakpoints } from '@/components/AppWrapper/index.vue'
defineProps({
  hamburgerActive: {
    type: Boolean,
    default: true,
  },
})
const bp = inject<Breakpoints>(sBreakpoints)
const lgTablet = bp?.greater('tablet')
</script>
<template>
  <div class="layout-admin-header-x">
    <Hamburger   
      :modelValue="hamburgerActive"
      @update:modelValue="$emit('update:hamburgerActive', $event)"
    ></Hamburger>
    <VisitedViews v-if="lgTablet"></VisitedViews>
  </div>
</template>
<style lang="scss">
.layout-admin-header-x{
  background-color: var(--c-bg);
  padding: .5em;
  > * + * {
    margin-top: var(--gap-xxxs);
  }
}
</style>
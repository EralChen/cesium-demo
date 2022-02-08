<script lang="ts">
import { defineComponent } from 'vue'
import VisitedViews from './visited-views/index.vue'
import Hamburger from '_c/Hamburger/index.vue'
export default defineComponent({
  props: {
    hamburgerActive: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    VisitedViews,
    Hamburger,
  },
  setup () {
    return {}
  },
})
</script>
<template>
  <div class="layout-admin-header-x">
    <Hamburger   
      :modelValue="hamburgerActive"
      @update:modelValue="$emit('update:hamburgerActive', $event)"
    ></Hamburger>
    <VisitedViews></VisitedViews>
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
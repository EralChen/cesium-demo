<script lang="ts">
import { defineComponent } from 'vue'
import SvgIcon from '_c/SvgIcon/index.vue'
export default defineComponent({
  components: {
    SvgIcon,
  },
  setup () {
    return {}
  },
})
</script>
<template>
  <SvgIcon :iconClass="'home-indicator'"></SvgIcon>
</template>
<style>
.icon-home-indicator{
  color: var(--c-info);
  font-size: 2em;
}
</style>

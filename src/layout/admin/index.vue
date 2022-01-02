<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from './SideBar/index.vue'
export default defineComponent({
  components: {
    SideBar,
  },
  setup () {
    return {}
  },
})
</script>
<template>
  <SideBar></SideBar>
  <router-view></router-view>
</template>

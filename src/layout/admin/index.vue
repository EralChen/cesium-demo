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
  <div class="admin-layout-x" sk-flex="row">
    <div class="admin-layout-side-bar-x">
      <SideBar></SideBar>
    </div>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<style>
.admin-layout-x{
  height: 100%;
}
.admin-layout-side-bar-x{
  width: 300px;
  height: 100%;
}
</style>

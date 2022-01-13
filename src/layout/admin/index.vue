<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from './side-bar/index.vue'
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
    <main sk-flex-grow="hidden">
      <div class="admin-layout-main__inner">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template> 
<style>
.admin-layout-x{
  height: 100%;
}
.admin-layout-main__inner{
  width: 100%;
}
.admin-layout-side-bar-x{
  width: 300px;
  height: 100%;
}
</style>

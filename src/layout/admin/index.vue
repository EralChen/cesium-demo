<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from './side-bar/index.vue'
import HeaderVue from './header/index.vue'
export default defineComponent({
  components: {
    SideBar,
    HeaderVue,
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
      <div class="admin-layout-main__header">
        <HeaderVue></HeaderVue>
      </div>
      <div class="admin-layout-main__inner" sk-flex-grow="hidden">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template> 
<style>
.admin-layout-x{
  height: 100%;
  --c-side-bar-bg: white;
  --c-main-bg: #f7f7f7;
}
.admin-layout-x main{
  flex-direction: column;
  background-color: var(--c-main-bg);
}
.admin-layout-main__inner{
  width: 100%;
}
.admin-layout-side-bar-x{
  width: 300px;
  height: 100%;
  border-radius: 4px;
  padding: 1em;
  background-color: var(--c-side-bar-bg);
}
</style>

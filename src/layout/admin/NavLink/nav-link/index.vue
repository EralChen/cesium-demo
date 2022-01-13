<script lang="ts">
import { defineComponent } from 'vue'
import CollapseX from '../collapse-x/index.vue'
export default defineComponent({
  name: 'AdminLayoutNavLink',
  components: {
    CollapseX,
  },
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  setup () {
    return {}
  },
})
</script>
<template>
  <router-link :to="to" custom>
    <template #default="{ route, navigate, isActive, isExactActive }">
      <CollapseX>
        <template #header>
          <a
            @click="navigate"
            class="admin-layout-nav-link"
            :class="{
              'is-active': isActive,
              'is-exact-active': isExactActive
            }"
          >
            <slot name="title">{{ route.meta.title }}</slot>
          </a>
        </template>
        <template #body>
          <slot></slot>
        </template>
      </CollapseX>
    </template>
  </router-link>
</template>

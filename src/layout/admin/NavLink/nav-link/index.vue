<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import CollapseX from '../collapse-x/index.vue'
export default defineComponent({
  name: 'AdminLayoutNavLink',
  components: {
    CollapseX,
  },
  props: {
    event: {
      type: String as PropType<keyof DocumentEventMap | ''>,
      default: 'click',
    },
    parent: {
      type: Object as PropType<RouteRecordRaw>,
      default: () => ({}),
    },
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
      <CollapseX :icon="!event" :header-class="{
        'is-dir': !event
      }">
        <template #header>
          <a
            @[event]="navigate"
            class="admin-layout-nav-link"
            :class="{
              'is-active': isActive,
              'is-exact-active': isExactActive,
            }"
          >
            <slot name="title">{{ route.meta.title }}</slot>
          </a>
        </template>
        <template #body>
          <slot :parent="parent"></slot>
        </template>
      </CollapseX>
    </template>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
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
    to: {
      type: String,
      required: true,
    },
    hiddenBody: {
      type: Boolean,
      default: false,
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
      }" :default-show="isActive" :hidden-body="hiddenBody">
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
          <slot name="body"></slot>
        </template>
      </CollapseX>
    </template>
  </router-link>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import CollapseX from '../collapse-x/index.vue'
export default defineComponent({
  name: 'AdminLayoutNavLink',
  components: {
    CollapseX,
  },
  props: {
    onlyChild: {
      type: Object as PropType<Partial<RouteRecordRaw>>,
      default: undefined,
    },
    linkable: {
      type: Boolean,
      default: true,
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
  setup (props) {
    const hasChildren = computed(() => !props.onlyChild && !props.linkable)
    return {
      hasChildren,
    }
  },
})
</script>
<template>
  <router-link :to="to" custom>
    <template #default="{ route, navigate, isActive, isExactActive }">
      <CollapseX 
        :icon="hasChildren" 
        :header-class="{
          'is-dir': hasChildren
        }" 
        :default-show="isActive" 
        :hidden-body="!!onlyChild || hiddenBody"
      >
        <template #header>
          <a
            @click="!hasChildren && navigate()"
            class="admin-layout-nav-link"
            :class="{
              'is-active': isActive,
              'is-exact-active': isExactActive,
            }"
          >
            <slot name="title" :only-child="onlyChild">{{ onlyChild?.meta?.title || route.meta.title }}</slot>
          </a>
        </template>
     
        <template #body>
          <slot name="body"></slot>
        </template>
      </CollapseX>
    </template>
  </router-link>
</template>

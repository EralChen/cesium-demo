<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import CollapseX from '../collapse-x/index.vue'
export default defineComponent({
  name: 'AdminLayoutNavLink',
  components: {
    CollapseX,
  },
  props: {
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
    expandBody: {
      type: Boolean,
      default: false,
    },
  },
  setup (props) {
    const hasChildren = computed(() => !props.linkable)
    const collapseShow = ref(props.expandBody)
    watch(() => props.expandBody, (v) => {
      collapseShow.value =  v
    }, { immediate: true })
    return {
      hasChildren,
      collapseShow,
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
        v-model="collapseShow"
        :hidden-body="hiddenBody"
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

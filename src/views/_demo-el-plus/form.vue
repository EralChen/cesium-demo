<script lang="ts" setup>
import { VkfForm } from '@vunk/form'
import { setData } from '@vunk/form/shared/helper'
import { FormItemRendererSource } from '@vunk/form/shared/types'
import { reactive } from 'vue'
const formData = reactive({})
const formSource: FormItemRendererSource[] = [
  {
    templateType: 'VkfInput',
    prop: 'name',
    label: '名称',
  },
]
</script>
<template>
  <VkfForm :formItems="formSource" :data="formData" @setData="setData(formData, $event)"></VkfForm>
</template>

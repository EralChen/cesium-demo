<script lang="ts">
import { defineComponent } from 'vue'
import moment from 'moment'
export default defineComponent({
  setup () {
    const endtime = moment.utc('2022/1/16 07:21')
    const startTime = moment.utc()
    const diffTime = endtime.diff(startTime, 'seconds')
    const twoDaysFromNow = (new Date().getTime() / 1000) + diffTime + 1
    return {
      twoDaysFromNow,
    }
  },
})
</script>
<template>
  {{ twoDaysFromNow }}
  <div>home</div>
</template>

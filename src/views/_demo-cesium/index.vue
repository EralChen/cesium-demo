<script lang="ts">
import { defineComponent } from 'vue'
import { VumViewer, VumSkyBasemap, VumCesium3dTileset, __VumCesium3dTileset } from 'vuesium'
export default defineComponent({
  components: {
    VumViewer,VumSkyBasemap,VumCesium3dTileset,
  },
  setup () {
    const tileLoad:__VumCesium3dTileset.OnLoad = ({viewer, tileset}) => {
      viewer.zoomTo(tileset)
    }
    return {
      tileLoad,
    }
  },
})
</script>
<template>
  <VumViewer>
    <VumSkyBasemap></VumSkyBasemap>
    <VumCesium3dTileset :default-options="{
      url: 'http://112.16.181.129:180/web/tileset/wlsq/djsq/tileset.json'
    }"
      @load="tileLoad"
    >

    </VumCesium3dTileset>
  </VumViewer>
</template>

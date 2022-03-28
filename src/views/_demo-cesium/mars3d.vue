
<script lang="ts">
import { VumViewer } from 'vuesium'
import { VumaMap , VumaTilesetLayer, __VumaTilesetLayer } from 'vuesium-mars3d'
import { defineComponent } from 'vue'

import { CustomShader, LightingModel } from 'cesium'
import TestPlugin from './sub-plugin.vue'
export default defineComponent({
  components: {
    VumViewer,
    VumaMap,
    VumaTilesetLayer,
    TestPlugin,
  },
  setup () {
    const layerLoad:__VumaTilesetLayer.OnLoad = ({ layer, map: { viewer } }) => {
      viewer.flyTo(layer.tileset)
    }
    const options:__VumaTilesetLayer.DefaultOptions = {
      url: 'http://112.16.181.129:180/web/tileset/wlsq/djsq/tileset.json',

      customShader: new CustomShader({
        lightingModel: LightingModel.UNLIT,
        isTranslucent: true,
        fragmentShaderText: `
      void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material)
      {
        material.diffuse = vec3(1.0, 1.0, 1.0); // 颜色
        material.alpha = 0.5;
      } ` }),
      
      
    } as any
    return {
      layerLoad,
      options,
    }
  },
})
</script>
<template>
  <vum-viewer>
    <vuma-map>
      <vuma-tileset-layer 
        :default-options="options" 
        @load="layerLoad"
      ></vuma-tileset-layer>
      <TestPlugin></TestPlugin>
    </vuma-map>
  </vum-viewer>
</template>

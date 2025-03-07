<template>
  <slot />
</template>

<script lang="ts">
import { inject, type PropType, onMounted, type Ref, watch } from 'vue';

import type { Map, Layer } from 'leaflet';

import { MAP } from './keys';

export default {
  name: 'FSMapTileLayer',
  props: {
    layers: {
      type: Object as PropType<Layer[]>,
      required: false
    }
  },
  setup(props) {
    const map = inject<Ref<Map | null>>(MAP);

    let lastLayers = props.layers;

    if(!map) {
      throw new Error('FSMapTileLayer must be used inside a FSMap component');
    }

    if(!map.value) {
      throw new Error('FSMapTileLayer must be used inside a FSMap component with a map');
    }

    const updateLayer = () => {
      if (!props.layers || !map.value) {
        return;
      }

      if(lastLayers) {
        lastLayers.forEach(layer => {
          layer.removeFrom(map.value!);
        });
      }

      lastLayers = [];

      props.layers.forEach(layer => {
        lastLayers?.push(layer.addTo(map.value!));
      });
    };

    onMounted(updateLayer);

    watch(() => props.layers, updateLayer);
  }
};
</script>

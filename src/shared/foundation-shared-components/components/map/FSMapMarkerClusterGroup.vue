<template>
  <slot />
</template>

<script lang="ts">
import { inject, provide, ref, type Ref, onUnmounted } from 'vue';

import { LatLngBounds, type Map, MarkerClusterGroup, divIcon } from 'leaflet';

import { clusterMarkerHtml } from '../../utils/leafletMarkers';
import { MAP } from './keys';

export default {
  name: 'FSMapMarkerClusterGroup',
  props: {
    expectedLayers: {
      type: Number,
      default: 0,
      required: false
    },
    disableClusteringAtZoom: {
      type: Number,
      default: 17,
      required: false
    }
  },
  setup(props, { emit }) {
    const map = inject<Ref<Map | null>>(MAP);
    let added = false;
    
    if(!map) {
      throw new Error('FSMapMarkerClusterGroup must be used inside a FSMap component');
    }

    if(!map.value) {
      throw new Error('FSMapMarkerClusterGroup must be used inside a FSMap component with a map');
    }

    const markerClusterGroup = ref<MarkerClusterGroup>(new MarkerClusterGroup({
      spiderfyOnMaxZoom: false,
      showCoverageOnHover: false,
      disableClusteringAtZoom: props.disableClusteringAtZoom,
      iconCreateFunction: function (cluster: any) {
        const size = 36;

        return divIcon({
          html: clusterMarkerHtml(cluster.getChildCount()),
          className: 'fs-map-marker fs-map-cluster-marker',
          iconSize: [size, size],
          iconAnchor: [size / 2, size / 2],
        });
      }}
    ));

    provide('markerClusterGroup', markerClusterGroup);

    const handleLayerChange = () => {
      if (!map.value) {
        return;
      }
      const layers = markerClusterGroup.value.getLayers();
      if (layers.length === props.expectedLayers && !added) {
        markerClusterGroup.value.addTo(map.value);
        added = true;
      }

      if (layers.length === 0 && added) {
        map.value.removeLayer(markerClusterGroup.value as unknown as L.Layer);
        added = false;
      }

      const bounds = new LatLngBounds([]);
      for (const layer of layers as any[]) {
        if (layer.getBounds) {
          bounds.extend(layer.getBounds());
        } else if (layer.getLatLng) {
          bounds.extend(layer.getLatLng());
        }
      }

      emit("update:bounds", layers.length > 0 ? bounds : null);
    };

    markerClusterGroup.value.on("layeradd", handleLayerChange);
    markerClusterGroup.value.on("layerremove", handleLayerChange);

    onUnmounted(() => {
      if (map.value && map.value.hasLayer(markerClusterGroup.value as unknown as L.Layer)) {
        map.value.removeLayer(markerClusterGroup.value as unknown as L.Layer);
      }
    });
  }
};
</script>

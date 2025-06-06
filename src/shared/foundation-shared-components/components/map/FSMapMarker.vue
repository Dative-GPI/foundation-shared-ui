<template>
  <slot />
</template>

<script lang="ts">
import { inject, type PropType, type Ref, watch, ref, onUnmounted, onMounted, computed } from 'vue';
import { type RouteLocation } from "vue-router";

import { type Map, divIcon, type LatLng, marker, type Marker, type MarkerClusterGroup } from 'leaflet';

import { useColors } from "../../composables";
import { useRouting } from '@dative-gpi/foundation-shared-services/composables';

import { gpsMarkerHtml, locationMarkerHtml, pinMarkerHtml } from '../../utils/leafletMarkers';
import { MAP, MARKERCLUSTERGROUP } from './keys';

export default {
  name: 'FSMapMarker',
  props: {
    variant: {
      type: String as PropType<'gps' | 'location' | 'pin'>,
      default: 'location',
      required: false
    },
    color: {
      type: String,
      default: 'primary',
      required: false
    },
    latlng: {
      type: Object as PropType<Pick<LatLng, "lat" | "lng"> | null>,
      required: true
    },
    icon: {
      type: String,
      required: false
    },
    selected: {
      type: Boolean,
      default: false,
      required: false
    },
    label: {
      type: String,
      required: false
    },
    to: {
      type: Object as PropType<RouteLocation | null>,
      required: false
    }
  },
  emits: ['click', 'auxclick'],
  setup(props, { emit }) {
    const map = inject<Ref<Map | null>>(MAP);
    const markerClusterGroup = inject<Ref<MarkerClusterGroup | null>>(MARKERCLUSTERGROUP, ref(null));
      
    const { getColors } = useColors();
    const { handleRoutingEvent } = useRouting();

    if(!map) {
      throw new Error('FSMapTileLayer must be used inside a FSMap component');
    }

    if(!map.value) {
      throw new Error('FSMapTileLayer must be used inside a FSMap component with a map');
    }
      
    const getMarkerIcon = () => {
      if(props.variant === 'gps') {
        const size = 16;
        return divIcon({
          html: gpsMarkerHtml(),
          className: 'fs-map-mylocation',
          iconSize: [size, size],
          iconAnchor: [size / 2, size / 2],
        });
      }

      if(props.variant === 'location') {
        const size = 36;
        return divIcon({
          html: locationMarkerHtml(props.icon ?? "mdi-map-marker", getColors(props.color).base, props.label),
          iconSize: [size, size],
          className: props.selected ? 'fs-map-marker fs-map-location fs-map-location-selected' : 'fs-map-marker fs-map-location',
          iconAnchor: [size / 2, size / 2],
        });
      }

      const size = 16;
      return divIcon({
        html: pinMarkerHtml(getColors(props.color).base, props.label),
        iconSize: [size, size],
        className: props.selected ? 'fs-map-marker fs-map-pin fs-map-pin-selected' : 'fs-map-marker fs-map-pin',
        iconAnchor: [size / 2, size / 2],
      });
    }

    const actualMarker = ref(marker(props.latlng ?? [0, 0], { icon: getMarkerIcon() }));

    const markerElement = computed(() => {
      return actualMarker.value.getElement();
    });

    const onClick = (event: MouseEvent) => {
      emit('click', {
        ...event,
        latlng: props.latlng
      });

      if(!props.to) {
        return;
      }
      handleRoutingEvent(event, props.to);
    }

    const onAuxClick = (event: MouseEvent) => {
      emit('auxclick', {
        ...event,
        latlng: props.latlng
      });

      if(!props.to) {
        return;
      }
      handleRoutingEvent(event, props.to);
    }

    watch(map, () => {
      if(!map.value) {
        return;
      }

      if(markerClusterGroup && markerClusterGroup.value) {
        actualMarker.value.addTo(markerClusterGroup.value);
      } else {
        actualMarker.value.addTo(map.value);
      }
    }, { immediate: true });

    watch([() => props.variant, () => props.color, () => props.selected], () => {
      if(!actualMarker.value || !map.value) {
        return;
      }

      const icon = getMarkerIcon();
      actualMarker.value?.setIcon(icon);
    });

    watch([() => props.latlng?.lat, () => props.latlng?.lng], () => {
      if(!actualMarker.value || !map.value || !props.latlng) {
        return;
      }

      actualMarker.value.setLatLng(props.latlng);
    });

    watch(markerElement, (newMarkerElement) => {
      if(!newMarkerElement) {
        return;
      }

      newMarkerElement.addEventListener('click', onClick);
      newMarkerElement.addEventListener('auxclick', onAuxClick);
    });

    onUnmounted(() => {
      if(actualMarker.value && map.value) {
        if(markerClusterGroup && markerClusterGroup.value) {
          markerClusterGroup.value.removeLayer(actualMarker.value as Marker);
        } else {
          map.value.removeLayer(actualMarker.value as Marker);
        }
      }
    })
  }
};
</script>

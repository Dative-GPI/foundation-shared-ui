<template>
  <FSCard
    class="fs-map"
    :width="$props.width"
    :height="$props.height"
    :style="style"
    v-bind="$attrs"
  >
    <div
      ref="leafletContainer"
      class="fs-leaflet-container"
    >
      <template
        v-if="map"
      >
        <FSMapTileLayer
          :layers="actualLayer"
        />
        <FSMapMarker 
          v-if="gpsPosition"
          variant="gps"
          :color="ColorEnum.Primary"
          :latlng="gpsPosition"
        />
        <slot />
      </template>
    </div>

    <FSMapLayerButton
      v-if="$props.allowedLayers?.length && $props.allowedLayers.length > 1"
      :disabled="$props.disabled"
      :layers="layers.filter((layer) => $props.allowedLayers?.includes(layer.name) ?? true)"
      :modelValue="$props.currentLayer"
      @update:model-value="$emit('update:currentLayer', $event)"
    />

    <FSCol
      v-if="map"
      class="fs-map-control-buttons"
    >
      <FSButton
        v-if="$props.showMyLocation"
        :disabled="$props.disabled"
        icon="mdi-crosshairs-gps"
        color="primary"
        variant="full"
        :elevation="true"
        @click="() => map!.locate()"
      />
      <FSCard
        v-if="$props.showZoomButtons"
        :elevation="true"
      >
        <FSCol
          gap="0"
        >
          <FSButton
            :disabled="$props.disabled"
            class="fs-map-zoom-plus-button"
            icon="mdi-plus"
            @click="() => map!.zoomIn()"
            :border="false"
          />
          <FSButton
            :disabled="$props.disabled"
            class="fs-map-zoom-minus-button"
            icon="mdi-minus"
            @click="() => map!.zoomOut()"
            :border="false"
          />
        </FSCol>
      </FSCard>
    </FSCol>

    <FSMapOverlay
      v-if="overlaySlots && Object.keys(overlaySlots).length"
      :mode="$props.overlayMode"
      @update:mode="$emit('update:overlayMode', $event)"
      @update:height="(height) => overlayHeight = height"
      @update:width="(width) => overlayWidth = width"
    >
      <template
        v-for="(_, name) in overlaySlots"
        v-slot:[name]="slotData"
      >
        <slot
          :name="'overlay-' + name"
          v-bind="slotData"
        />
      </template>
    </FSMapOverlay>
  </FSCard>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, type Ref, provide, type PropType, ref, type StyleValue, watch, onUnmounted, markRaw } from "vue";

import type {} from "leaflet.markercluster";
import { map as createMap, control, latLngBounds, latLng, type LatLng, type FitBoundsOptions, type ZoomPanOptions, type LatLngBounds } from "leaflet";

import { useBreakpoints, useColors, useMapLayers, useSlots } from "../../composables";
import { ColorEnum, MapLayers, MapOverlayPositions } from "../../models";

import FSMapLayerButton from "./FSMapLayerButton.vue";
import FSMapOverlay from "./FSMapOverlay.vue";
import FSButton from "../FSButton.vue";
import FSCard from "../FSCard.vue";
import FSCol from "../FSCol.vue";

import FSMapMarker from "./FSMapMarker.vue";
import FSMapTileLayer from "./FSMapTileLayer.vue";

export default defineComponent({
  name: "FSMap",
  components: {
    FSMapMarker,
    FSMapTileLayer,
    FSMapLayerButton,
    FSMapOverlay,
    FSButton,
    FSCard,
    FSCol,
  },
  props: {
    height: {
      type: [String, Number] as PropType<string | number | null>,
      required: false,
      default: '400px'
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: '100%'
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    grayscale: {
      type: Boolean,
      required: false,
      default: false
    },
    overlayMode: {
      type: String as PropType<MapOverlayPositions>,
      required: false,
      default: MapOverlayPositions.Collapse
    },
    showMyLocation: {
      type: Boolean,
      required: false,
      default: true
    },
    showZoomButtons: {
      type: Boolean,
      required: false,
      default: true
    },
    enableScrollWheelZoom: {
      type: Boolean,
      required: false,
      default: false
    },
    center: {
      type: Array as PropType<number[] | null>,
      required: false,
      default: null
    },
    bounds: {
      type: Object as PropType<LatLngBounds | null>,
      required: false,
      default: null
    },
    currentLayer: {
      type: String as PropType<MapLayers>,
      required: false,
      default: MapLayers.Map
    },
    allowedLayers: {
      type: Array as PropType<MapLayers[]>,
      required: false,
      default: () => [MapLayers.Map, MapLayers.Imagery]
    },
    zoom: {
      type: Number,
      required: false,
      default: 16
    }
  },
  emits: ['update:overlayMode', 'update:currentLayer', "click:latlng", "update:zoom", "update:center"],
  setup(props, { emit }) {
    const { layers } = useMapLayers();
    const { isExtraSmall } = useBreakpoints();
    const { getColors } = useColors();
    const { slots } = useSlots();

    const leafletContainer = ref<HTMLElement>();
    const gpsPosition : Ref<LatLng | null> = ref(null);
    const map: Ref<L.Map | null> = ref(null);
    const overlayHeight = ref<number>();
    const overlayWidth = ref<number>();

    provide('map', map);

    const mapResizeObserver = new ResizeObserver(() => {
      if(!map.value) {
        return;
      }
      map.value.invalidateSize();
    });

    const bottomOffset = computed(() => {
      if (props.overlayMode !== MapOverlayPositions.Expand && overlayHeight.value && isExtraSmall.value) {
        return overlayHeight.value;
      }
      return 0;
    });

    const leftOffset = computed(() => {
      if (overlayWidth.value && !isExtraSmall.value) {
        return overlayWidth.value;
      }
      return 0;
    });

    const style = computed((): StyleValue => ({
      "--fs-map-location-pin-color": getColors(ColorEnum.Primary).base,
      "--fs-map-mylocation-pin-color": getColors(ColorEnum.Primary).base,
      "--fs-map-mylocation-pin-color-alpha": getColors(ColorEnum.Primary).base + "50",
      "--fs-map-container-grayscale": props.grayscale ? '0.9' : '0',
      "--fs-map-control-buttons-margin-bottom": `${bottomOffset.value}px`,
    }));

    const actualLayer = computed(() => {
      return layers.find((mapLayer) => mapLayer.name === props.currentLayer)?.layers ?? layers[0].layers;
    });

    const overlaySlots = computed(() => {
      return Object.keys(slots).filter((slot) => slot.startsWith("overlay-")).reduce((acc, slot) => {
        acc[slot.replace("overlay-", "")] = slots[slot];
        return acc;
      }, {} as Record<string, unknown>);
    });

    const calculateTargetPosition = (target: L.LatLng, zoom?: number) => {
      if(!map.value) {
        return target;
      }
      zoom = zoom ?? map.value.getZoom();
      const targetPoint = map.value.project(target, zoom).subtract([leftOffset.value / 2, -bottomOffset.value / 2]);
      return map.value.unproject(targetPoint, zoom);
    }

    const flyTo = (lat: number, lng: number, zoom: number, options?: ZoomPanOptions) => {
      if(!map.value) {
        return;
      }

      if(isExtraSmall.value) {
        // We wait for bottom offset to be calculated and stable to focus on the right position
        let tries = 0;
        let oldBottomOffset = bottomOffset.value;
        const interval = setInterval(() => {
          if(oldBottomOffset === bottomOffset.value || tries >= 30) {
            clearInterval(interval);
            map.value!.flyTo(calculateTargetPosition(latLng(lat, lng), zoom), zoom, options);
          }
          oldBottomOffset = bottomOffset.value;
          tries++;
        }, 20);
        
      } else {
        map.value.flyTo(calculateTargetPosition(latLng(lat, lng), zoom), zoom, options);
      }
    }

    const setView = (lat: number, lng: number, zoom: number) => {
      if(!map.value) {
        return;
      }
      map.value.setView(calculateTargetPosition(latLng(lat, lng), zoom), zoom);
    }

    const fitBounds = (bounds: LatLngBounds, options?: FitBoundsOptions) => {
      if (!map.value) {return;}
      const paddingTopLeft: [number, number] = [
        leftOffset.value + 24,
        24
      ];

      const paddingBottomRight: [number, number] = [
        24,
        bottomOffset.value + 24
      ];
      const paddingOptions = {
        paddingTopLeft,
        paddingBottomRight,
        ...options,
      };

      map.value.fitBounds(bounds, paddingOptions);
    };

    onMounted(() => {
      if(!leafletContainer.value) {
        return;
      }

      const mapOptions = {
        zoomControl: false,
        scrollWheelZoom: props.enableScrollWheelZoom && !props.disabled,
        dragging: !props.disabled,
        doubleClickZoom: false,
        minZoom: 2,
        maxZoom: 22,
        maxBounds: latLngBounds(latLng(-90, -180), latLng(90, 180)),
        maxBoundsViscosity: 1.0,
        zoom: props.zoom,
        center: props.center ? latLng(props.center[0], props.center[1]) : latLng(48.85782, 2.29521)
      } satisfies L.MapOptions;

      map.value = markRaw(createMap(leafletContainer.value, mapOptions));
      
      map.value.on('click', (e: L.LeafletMouseEvent) => {
        emit('click:latlng', e.latlng);
      });

      map.value.on('zoomend', () => {
        if(!map.value) {
          return;
        }
        emit('update:zoom', map.value.getZoom());
      });

      map.value.on('moveend', () => {
        if(!map.value) {
          return;
        }
        const center = map.value.getCenter();
        emit('update:center', [center.lat, center.lng]);
      });

      map.value.attributionControl.remove();
      control.attribution({ position: 'bottomleft' }).addTo(map.value);

      map.value.on('locationfound', (e: L.LocationEvent) => {
        if(!e.latlng) {
          return;
        }

        gpsPosition.value = e.latlng;

        if(!map.value) {
          return;
        }

        flyTo(e.latlng.lat, e.latlng.lng, 14);
      });
      
      mapResizeObserver.observe(leafletContainer.value);
    });

    onUnmounted(() => {
      mapResizeObserver.disconnect();
    });

    watch ([() => props.center, () => props.zoom], ([newCenter, newZoom], [oldCenter, oldZoom]) => {
      if(!map.value || !props.center || !newCenter) {
        return;
      }

      if(map.value.getZoom() === newZoom && map.value.getCenter().equals(latLng(newCenter[0], newCenter[1]))) {
        return;
      }

      if((newCenter[0] !== oldCenter?.[0] || newCenter[1] !== oldCenter?.[1]) && newZoom !== oldZoom) {
        setView(newCenter[0], newCenter[1], newZoom);
      }
      else if ((newCenter[0] !== oldCenter?.[0] || newCenter[1] !== oldCenter?.[1])) {
        setView(newCenter[0], newCenter[1], map.value.getZoom());
      }
      else if(newZoom !== oldZoom) {
        map.value.setZoom(newZoom);
      }
    }, { immediate: true });

    watch([() => props.bounds, () => map.value], () => {
      if(!map.value || !props.bounds) {
        return;
      }
      fitBounds(props.bounds, { maxZoom: 14 });
    });

    watch(() => props.enableScrollWheelZoom, (newValue) => {
      if(!map.value) {
        return;
      }
      if(newValue) {
        map.value.scrollWheelZoom.enable();
      } else {
        map.value.scrollWheelZoom.disable();
      }
    }, { immediate: true });

    watch(() => props.disabled, (newValue) => {
      if(!map.value) {
        return;
      }
      if(newValue) {
        map.value.dragging.disable();
        map.value.scrollWheelZoom.disable();
      } else {
        map.value.dragging.enable();
        if(props.enableScrollWheelZoom) {
          map.value.scrollWheelZoom.enable();
        }
      }
    }, { immediate: true });

    return {
      ColorEnum,
      leafletContainer,
      overlayHeight,
      overlayWidth,
      map,
      actualLayer,
      layers,
      gpsPosition,
      style,
      overlaySlots
    };
  }
});
</script>
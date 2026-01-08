<template>
  <FSCol>
    <FSMap
      :lockZoomOnFlyTo="true"
      v-model:center="center"
      :enableScrollWheelZoom="true"
      :showMyLocation="true"
      :zoom="5"
      v-model:currentLayer="mapLayer"
      @click:latlng="(latlng: any) => onNewLatLng(latlng.lat, latlng.lng, false)"
      v-bind="$attrs"
    >
      <FSMapMarker
        v-if="actualLatitude && actualLongitude"
        :label="$props.label"
        :icon="$props.icon"
        :latlng="{ lat: actualLatitude, lng: actualLongitude }"
        :selected="true"
      />
    </FSMap>
    <FSCol>
      <FSAutoCompleteAddress
        :maxWidth="null"
        :modelValue="$props.modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
      />
      <FSRow>
        <FSNumberField
          :label="$tr('ui.location.latitude', 'Latitude')"
          :modelValue="actualLatitude"
          :clearable="false"
          :rules="[NumberRules.max(90), NumberRules.min(-90), NumberRules.required()]"
          @update:modelValue="onNewLatLng($event, actualLongitude ?? 0, true)"
        />
        <FSNumberField
          :label="$tr('ui.location.longitude', 'Longitude')"
          :modelValue="actualLongitude"
          :clearable="false"
          :rules="[NumberRules.max(180), NumberRules.min(-180), NumberRules.required()]"
          @update:modelValue="onNewLatLng(actualLatitude ?? 0, $event, true)"
        />
      </FSRow>
    </FSCol>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch, type PropType } from "vue";

import type { Address } from "@dative-gpi/foundation-shared-domain";
import { useAddress } from "@dative-gpi/foundation-shared-components/composables";
import { MapLayers, NumberRules } from '@dative-gpi/foundation-shared-components/models';

import FSAutoCompleteAddress from '@dative-gpi/foundation-shared-components/components/autocompletes/FSAutoCompleteAddress.vue';
import FSNumberField from "@dative-gpi/foundation-shared-components/components/fields/FSNumberField.vue"
import FSMapMarker from '@dative-gpi/foundation-shared-components/components/map/FSMapMarker.vue';
import FSMap from "@dative-gpi/foundation-shared-components/components/map/FSMap.vue";
import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';
import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';


export function debounceAsync<T, U extends any[]>(
  callback: (...args: U) => Promise<T>,
  wait: number,
): (...args: U) => Promise<T> {
  let timeoutId: number | null = null;
  let rejectPromise: (((reason?: any) => void) | null) = null;

  return (...args: U) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    if (rejectPromise) {
      rejectPromise("debounced");
      rejectPromise = null;
    }

    return new Promise<T>((resolve) => {
      const timeoutPromise = new Promise<void>((resolve, reject) => {
        timeoutId = setTimeout(resolve, wait);
        rejectPromise = reject;
      });
      timeoutPromise.then(async () => {
        resolve(await callback(...args));
      });
    });
  };
}

export default defineComponent({
  name: "FSMapAddressField",
  components: {
    FSAutoCompleteAddress,
    FSNumberField,
    FSMapMarker,
    FSMap,
    FSRow,
    FSCol
  },
  emits: ["update:modelValue"],
  props: {
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Object as PropType<Address | null>,
      required: false,
    }
  },
  setup(props, { emit }) {
    const { reverseSearch } = useAddress();

    const loading = ref(false);
    const actualLatitude = ref<number | null>(null);
    const actualLongitude = ref<number | null>(null);
    const mapLayer = ref(MapLayers.Map);

    const center = computed(() => {
      return props.modelValue ? [props.modelValue.latitude, props.modelValue.longitude] : null;
    });

    const reverseSearchDebounced = debounceAsync(reverseSearch, 500);
    
    const onNewLatLng = async (lat: number|string, lng: number|string, debounced: boolean) => {
      if(typeof lat === 'string') {
        lat = parseFloat(lat);
        if(isNaN(lat)) {
          return;
        }
      }

      if(typeof lng === 'string') {
        lng = parseFloat(lng);
        if(isNaN(lng)) {
          return;
        }
      }

      actualLatitude.value = lat;
      actualLongitude.value = lng;

      let fullAddress;
      loading.value = true;
      if(debounced) {
        try {
          fullAddress = await reverseSearchDebounced(lat, lng);
        } catch {
          return;
        }
      } else {
        fullAddress = await reverseSearch(lat, lng);
      }

      emit("update:modelValue", {
        ...fullAddress,
        latitude: actualLatitude.value,
        longitude: actualLongitude.value,
      });
      loading.value = false;
    }

    watch(() => props.modelValue, (newValue) => {
      if(newValue) {
        actualLatitude.value = newValue.latitude;
        actualLongitude.value = newValue.longitude;
      }
    }, { immediate: true });

    return {
      center, 
      mapLayer,
      NumberRules,
      actualLatitude,
      actualLongitude,
      onNewLatLng
    };
  }
});


</script>
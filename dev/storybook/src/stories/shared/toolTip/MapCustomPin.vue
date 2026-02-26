<template>
    <FSRow height="500px">
        <FSMap
            :center="[location.address.latitude, location.address.longitude]"
            @click:latlng="onNewClick"
        >
            <FSMapMarker
                variant="pin"
                :selected="true"
                :color="location.color || 'primary'"
                :label="location.label"
                :latlng="{ lat: location.address.latitude, lng: location.address.longitude }"
                :html="markerElement"
            />
            <template #overlay-body>
                <FSRow>
                    <span>Fixed header for the overlay</span>
                </FSRow>
            </template>
        </FSMap>
    </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

import { useDomRenderer } from '@dative-gpi/foundation-shared-components/composables';

import CustomPin from './CustomPin.vue';
import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';
import FSMap from '@dative-gpi/foundation-shared-components/components/map/FSMap.vue';
import FSMapMarker from '@dative-gpi/foundation-shared-components/components/map/FSMapMarker.vue';

export default defineComponent({
    name: "MapCustomPin",
    components:
    {
        FSMap,
        FSRow,
        FSMapMarker
    },
    inheritAttrs: false,
    setup() {
        const renderer = useDomRenderer<{ lat: number; lng: number }>(CustomPin);

        const lat = ref(48.8566);
        const lng = ref(2.3522);

        const handle = renderer.mount(() => ({ lat: lat.value, lng: lng.value }));
        const markerElement = handle.getElement();

        const location = computed(() => ({
            "id": "3fb7ebf0-3227-4767-bb96-001384efdd57",
            "label": "Le Mans GERAL",
            "address": {
                "formattedAddress": "Bd Marie et Alexandre Oyon, 72100 Le Mans, France",
                "locality": "Le Mans",
                "country": "France",
                "latitude": lat.value,
                "longitude": lng.value,
                "placeId": "EjJCb3VsZXZhcmQgTWFyaWUgZXQgQWxleGFuZHJlIE95b24sIExlIE1hbnMsIEZyYW5jZSIuKiwKFAoSCZdY4sE2j-JHEfQHbY7RQXwpEhQKEgkxqvMU0ojiRxF_4H1qTF0CaQ",
                "placeLabel": "Boulevard Marie et Alexandre Oyon, Le Mans, France"
            },
            icon: null,
            color: null
        }));

        const onNewClick = (event: any) => {
            lat.value = event.lat;
            lng.value = event.lng;
        };

        return {
            location,
            onNewClick,
            markerElement
        };
    },

});

</script>
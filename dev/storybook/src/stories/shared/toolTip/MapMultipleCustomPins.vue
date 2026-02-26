<template>
    <FSRow height="500px">
        <FSMap
            :center="center"
            :bounds="bounds"
        >
            <FSMapMarkerClusterGroup
                :expected-layers="activePins.length"
                @update:bounds="bounds = $event"
            >
                <FSMapMarker
                    v-for="(pin, index) in activePins"
                    :key="pin.id"
                    variant="pin"
                    :selected="selectedIndex === index"
                    :color="pin.color || 'primary'"
                    :label="pin.label"
                    :latlng="{ lat: pin.lat, lng: pin.lng }"
                    :html="pinElements[index]"
                    @click="onPinClick(index)"
                />
            </FSMapMarkerClusterGroup>
            <template #overlay-body>
                <FSCol
                    padding="8px"
                    gap="8px"
                >
                    <FSButton
                        @click="addRandomPin"
                        :disabled="activePins.length >= maxPins"
                    >
                        Ajouter un pin ({{ activePins.length }}/{{ maxPins }})
                    </FSButton>
                    <FSButton
                        @click="removeLastPin"
                        :disabled="activePins.length === 0"
                    >
                        Supprimer le dernier pin
                    </FSButton>
                    <FSText>Nombre de pins actifs: {{ activePins.length }}</FSText>
                </FSCol>
            </template>
        </FSMap>
    </FSRow>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick, computed } from 'vue';

import { useDomRenderer } from '@dative-gpi/foundation-shared-components/composables';

import CustomPin from './CustomPin.vue';
import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';
import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';
import FSMap from '@dative-gpi/foundation-shared-components/components/map/FSMap.vue';
import FSMapMarker from '@dative-gpi/foundation-shared-components/components/map/FSMapMarker.vue';
import FSMapMarkerClusterGroup from '@dative-gpi/foundation-shared-components/components/map/FSMapMarkerClusterGroup.vue';
import FSButton from '@dative-gpi/foundation-shared-components/components/FSButton.vue';
import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';

interface Pin {
    id: string;
    label: string;
    lat: number;
    lng: number;
    color: string;
}

export default defineComponent({
    name: "MapMultipleCustomPins",
    components: {
        FSMap,
        FSRow,
        FSCol,
        FSMapMarker,
        FSMapMarkerClusterGroup,
        FSButton,
        FSText
    },
    inheritAttrs: false,
    setup() {
        const maxPins = 10;
        const activePins = ref<Pin[]>([]);
        const bounds = ref(null);
        const center = ref<[number, number]>([48.8566, 2.3522]);
        const selectedIndex = ref<number | null>(null);

        const colors = ['primary', 'success', 'error', 'warning', 'info'];

        // Une seule instance du composable pour tous les pins
        const renderer = useDomRenderer<{ lat: number; lng: number }>(CustomPin);

        // Map id -> { handle, element }
        const pinHandles = new Map<string, { handle: ReturnType<typeof renderer.mount>; element: HTMLElement }>();

        // Éléments DOM exposés au template, indexés par position dans activePins
        const pinElements = computed(() =>
            activePins.value.map(pin => pinHandles.get(pin.id)?.element ?? null)
        );

        const addRandomPin = () => {
            if (activePins.value.length >= maxPins) return;

            const lat = 35 + Math.random() * 35;
            const lng = -10 + Math.random() * 40;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const id = `pin-${Date.now()}-${Math.random()}`;

            const pin: Pin = { id, label: `Pin ${activePins.value.length + 1}`, lat, lng, color };

            // mount() crée son propre slot de rendu réactif
            const handle = renderer.mount(() => ({
                lat: pin.lat,
                lng: pin.lng
            }));

            pinHandles.set(id, { handle, element: handle.getElement() });
            activePins.value.push(pin);
        };

        const removeLastPin = () => {
            if (activePins.value.length === 0) return;

            const pin = activePins.value[activePins.value.length - 1];

            // Démontage propre uniquement pour ce pin
            pinHandles.get(pin.id)?.handle.unmount();
            pinHandles.delete(pin.id);
            activePins.value.pop();

            if (selectedIndex.value !== null && selectedIndex.value >= activePins.value.length) {
                selectedIndex.value = null;
            }
        };

        const onPinClick = (index: number) => {
            selectedIndex.value = index;
        };

        return {
            activePins,
            bounds,
            center,
            selectedIndex,
            maxPins,
            pinElements,
            addRandomPin,
            removeLastPin,
            onPinClick,
        };
    },
});
</script>
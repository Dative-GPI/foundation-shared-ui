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
                    :html="pinInstances[index].getHtml()"
                    @click="onPinClick(index)"
                    @ready="onPinReady(index)"
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
import { defineComponent, ref, watch, nextTick } from 'vue';

import { useDynamicVNode } from '@dative-gpi/foundation-shared-components/composables';

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

        const pinInstances = Array.from({ length: maxPins }, () => useDynamicVNode(CustomPin));

        const mountPin = async (index: number) => {
            if (index >= activePins.value.length) return;

            const pin = activePins.value[index];
            const instance = pinInstances[index];

            await nextTick();
            await instance.mount({
                lat: pin.lat,
                lng: pin.lng
            });
        };

        const onPinReady = async (index: number) => {
            await mountPin(index);
        };

        const onPinClick = (index: number) => {
            selectedIndex.value = index;
        };

        const addRandomPin = async () => {
            if (activePins.value.length >= maxPins) return;

            const lat = 35 + Math.random() * 35;
            const lng = -10 + Math.random() * 40;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const id = `pin-${Date.now()}-${Math.random()}`;

            const pin: Pin = {
                id,
                label: `Pin ${activePins.value.length + 1}`,
                lat,
                lng,
                color
            };

            activePins.value.push(pin);

            await mountPin(activePins.value.length - 1);
        };

        const removeLastPin = () => {
            if (activePins.value.length === 0) return;

            const index = activePins.value.length - 1;
            pinInstances[index].unmount();
            activePins.value.pop();

            if (selectedIndex.value !== null && selectedIndex.value >= activePins.value.length) {
                selectedIndex.value = null;
            }
        };

        watch(activePins, async () => {
            await nextTick();
            for (let i = 0; i < activePins.value.length; i++) {
                await mountPin(i);
            }
        }, { deep: true });

        return {
            activePins,
            bounds,
            center,
            selectedIndex,
            maxPins,
            pinInstances,
            addRandomPin,
            removeLastPin,
            onPinClick,
            onPinReady
        };
    },
});
</script>
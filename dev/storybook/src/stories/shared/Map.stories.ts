import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';

import { addComponentEmits } from '@/utils/properties';

import FSMap from "@dative-gpi/foundation-shared-components/components/map/FSMap.vue";
import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';
import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';
import FSFadeOut from '@dative-gpi/foundation-shared-components/components/FSFadeOut.vue';
import FSMapMarker from '@dative-gpi/foundation-shared-components/components/map/FSMapMarker.vue';
import FSMapMarkerClusterGroup from '@dative-gpi/foundation-shared-components/components/map/FSMapMarkerClusterGroup.vue';
import { MapLayers, MapOverlayPositions } from '@dative-gpi/foundation-shared-components/models';
import { uuidv4 } from '@dative-gpi/bones-ui';
import FSButton from '@dative-gpi/foundation-shared-components/components/FSButton.vue';

const meta = {
  title: 'Foundation/Shared/Map',
  component: FSMap,
  tags: ['autodocs'],
  argTypes: {
    ...addComponentEmits(FSMap),
    currentLayer: {
      control: 'select',
      options: [MapLayers.Map, MapLayers.Imagery, MapLayers.Snow],
    },
    overlayMode: {
      control: 'select',
      options: [MapOverlayPositions.Expand, MapOverlayPositions.Half, MapOverlayPositions.Collapse],
    },
  },
} satisfies Meta<typeof FSMap>;

export default meta;
type Story = StoryObj<typeof meta>;

const locations = [
  {
    "id": "3fb7ebf0-3227-4767-bb96-001384efdd57",
    "label": "Le Mans GERAL",
    "address": {
      "formattedAddress": "Bd Marie et Alexandre Oyon, 72100 Le Mans, France",
      "locality": "Le Mans",
      "country": "France",
      "latitude": 47.9946047,
      "longitude": 0.1907672,
      "placeId": "EjJCb3VsZXZhcmQgTWFyaWUgZXQgQWxleGFuZHJlIE95b24sIExlIE1hbnMsIEZyYW5jZSIuKiwKFAoSCZdY4sE2j-JHEfQHbY7RQXwpEhQKEgkxqvMU0ojiRxF_4H1qTF0CaQ",
      "placeLabel": "Boulevard Marie et Alexandre Oyon, Le Mans, France"
    },
    icon: null,
    color: null
  }, {
    "id": "83963f32-6bd5-453d-b271-2b5a41672966",
    "label": "Dative GPI",
    "icon": "mdi-laptop",
    "color": "primary",
    "address": {
      "formattedAddress": "100 rue de norvège, Colombier Saugnieu, France",
      "locality": "Colombier Saugnieu",
      "country": "France",
      "latitude": 45.71175,
      "longitude": 5.071489,
      "placeId": "",
      "placeLabel": "Dative, France"

    }
  },
  {
    "id": "44e00e4b-ef50-4f88-9fb2-d94659ee5881",
    "label": "Gerard Perrier Industrie",
    "icon": "mdi-home",
    "color": "primary",
    "address": {
      "formattedAddress": "160 rue de norvège, Colombier Saugnieu, France",
      "locality": "Colombier Saugnieu",
      "country": "France",
      "latitude": 45.71129,
      "longitude": 5.071729,
      "placeId": "",
      "placeLabel": "GPI, France"

    }
  },
  {
    "id": "4a3ced7a-d7e7-4004-b40a-ed57fa45615d",
    "label": "Seirel Automatismes SAS",
    "icon": "mdi-snowflake",
    "color": "#FF0000",
    "address": {
      "formattedAddress": "7 Rue Galilée, 69800 Saint-Priest, France",
      "locality": "Saint-Priest",
      "country": "France",
      "latitude": 45.682349,
      "longitude": 4.956942,
      "placeId": "",
      "placeLabel": "Seirel, France"

    }
  },
  {
    "id": "0598187c-3c63-413c-bc82-86c279027955",
    "label": "D.E.S. FRIUL DI MIEC",
    "address": {
      "formattedAddress": "Via Ermes di Colloredo, 33040 Salt UD, Italie",
      "locality": "Salt",
      "country": "Italie",
      "latitude": 46.1158765,
      "longitude": 13.2881119,
      "placeId": "EjBWaWEgRXJtZXMgZGkgQ29sbG9yZWRvLCBQb3ZvbGV0dG8sIFVkaW5lLCBJdGFsaWUiLiosChQKEgl_rhjEJEp6RxGWfpMrWhzPkBIUChIJn70qOztKekcRlT3jhsw1_cY",
      "placeLabel": "Via Ermes di Colloredo, Povoletto, Udine, Italie"
    }
  }
];

const areas = [{
  id: 'area1',
  color: 'error',
  coordinates: [
    { latitude: 45.799455, longitude: 4.886445 },
    { latitude: 45.904229, longitude: 5.193776 },
    { latitude: 45.582651, longitude: 5.308631 },
    { latitude: 45.476594, longitude: 5.001300 },
    { latitude: 45.836335, longitude: 4.754118 },
  ]
}];

export const SingleLocationMap: Story = {
  args: {
    overlayMode: MapOverlayPositions.Collapse,
    currentLayer: MapLayers.Map,
    height: '100%',
    width: '100%',
    grayscale: false,
    showMyLocation: true,
    showZoomButtons: true,
    enableScrollWheelZoom: true
  },
  render: (args) =>
    defineComponent({
      components: { FSMap, FSRow, FSMapMarker },
      inheritAttrs: false,
      setup() {
        const location = ref(locations[0]);

        const onNewClick = (event: any) => {
          console.log(event);
          location.value.address.latitude = event.lat;
          location.value.address.longitude = event.lng;
        };

        return { args, location, onNewClick };
      },
      template: `
        <FSRow height="500px">
          <FSMap
            :center="[location.address.latitude, location.address.longitude]"
            @click:latlng="onNewClick"
            v-model:overlayMode="args.overlayMode"
            v-model:currentLayer="args.currentLayer"
            v-model:selectedLocationId="args.selectedLocationId"
            v-bind="args"
          >
            <FSMapMarker
              variant="location"
              :selected="true"
              :icon="location.icon"
              :color="location.color || 'primary'"
              :label="location.label"
              :latlng="{ lat: location.address.latitude, lng: location.address.longitude }"
            />
            <template #overlay-body>
              <FSRow>
                <span>Fixed header for the overlay</span>
              </FSRow>
            </template>
          </FSMap>
        </FSRow>
      `,
    }),
};

export const MultiLocationMap: Story = {
  args: {
    currentLayer: MapLayers.Imagery,
    overlayMode: MapOverlayPositions.Half,
  },
  render: (args) => ({
    components: { FSMap, FSFadeOut, FSRow, FSCol, FSMapMarker, FSMapMarkerClusterGroup },
    setup() {
      const bounds = ref(null);
      return { args, locations, bounds };
    },
    template: `
      <FSMap
        v-model:overlayMode="args.overlayMode"
        v-model:currentLayer="args.currentLayer"
        v-model:selectedLocationId="args.selectedLocationId"
        :bounds="bounds"
        v-bind="args"
      >
        <FSMapMarkerClusterGroup
          :expected-layers="locations.length"
          @update:bounds="bounds = $event"
        >
          <FSMapMarker
            v-for="location in locations"
            :key="location.id"
            variant="location"
            :icon="location.icon"
            :color="location.color || 'primary'"
            :label="location.label"
            :latlng="{ lat: location.address.latitude, lng: location.address.longitude }"
          />
        </FSMapMarkerClusterGroup>
        <template #overlay-body>
          <FSRow
            padding="8px"
          >
            <span>Custom overlay with fade out</span>
          </FSRow>
          <FSCol height="hug" style="min-height: 0;">
            <FSFadeOut height="100%">
              <div style="padding:8px; border-radius:4px; display: flex; flex-direction: column; gap: 10px;">
                <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
              </div>
            </FSFadeOut>
          </FSCol>
        </template>
      </FSMap>
    `,
  }),
};

export const CustomPinMap: Story = {
  args: {
    currentLayer: MapLayers.Snow,
    allowedLayers: [MapLayers.Map, MapLayers.Imagery, MapLayers.Snow],
    grayscale: false,
    enableScrollWheelZoom: true,
  },
  render: (args) => ({
    components: { FSMap, FSMapMarker, FSMapMarkerClusterGroup },
    setup() {
      const bounds = ref(null);

      return { args, bounds };
    },
    template: `
      <FSMap
        v-model:currentLayer="args.currentLayer"
        :bounds="bounds"
        v-bind="args"
      >
        <FSMapMarkerClusterGroup
          :expected-layers="2"
          @update:bounds="bounds = $event"
        >
          <FSMapMarker
            :latlng="{ lat: 45.904565, lng: 6.423869 }"
            :selected="true"
            label="Centre station"
            variant="pin"
            @click="console.log($event)"
          />
          <FSMapMarker
            :latlng="{ lat: 45.915748, lng: 6.469506 }"
            :selected="false"
            label="Les confins"
            variant="pin"
            @click="console.log($event)"
          />
        </FSMapMarkerClusterGroup>
      </FSMap>
    `,
  }),
};

export const ClickablePinMap: Story = {
  args: {
    enableScrollWheelZoom: true
  },
  render: (args) => ({
    components: { FSMap, FSMapMarker, FSMapMarkerClusterGroup },
    setup() {
      const bounds = ref(null);
      const center = ref<[number, number] | null>(null);
      const zoom = ref(10);

      const onClick = (event: any, id: "green" | "blue") => {
        console.log(event);
        if(id === "blue") {
          zoom.value = 15; // Zoom in on the first marker
          center.value = [event.latlng.lat, event.latlng.lng];
        }
        if(id === "green") {
          center.value = [event.latlng.lat, event.latlng.lng];
        }
      };

      return { args, bounds, zoom, center, onClick };
    },
    template: `
      <FSMap
        v-model:currentLayer="args.currentLayer"
        v-model:bounds="bounds"
        v-model:center="center"
        v-model:zoom="zoom"
        v-bind="args"
      >
        <FSMapMarkerClusterGroup
          :expected-layers="2"
          @update:bounds="bounds = $event"
        >
          <FSMapMarker
            :latlng="{ lat: 45.904565, lng: 6.423869 }"
            :selected="true"
            label="Centre station"
            variant="pin"
            @click="onClick($event, 'blue')"
          />
          <FSMapMarker
            :latlng="{ lat: 45.915748, lng: 6.469506 }"
            :selected="false"
            color="green"
            label="Les confins"
            variant="pin"
            @click="onClick($event, 'green')"
          />
        </FSMapMarkerClusterGroup>
      </FSMap>
    `,
  }),
};

export const GeneratePinMap: Story = {
  args: {
    enableScrollWheelZoom: true
  },
  render: (args) => ({
    components: { FSMap, FSMapMarker, FSMapMarkerClusterGroup, FSButton },
    setup() {
      const pins = ref<{ id: string; label: string; latitude: number; longitude: number }[]>([]);
      const bounds = ref(null);

      const addRandomPin = () => {
        const randomIndex = Math.floor(Math.random() * locations.length);
        const location = locations[randomIndex];
        const id= uuidv4();
        const pin = {
          id: id,
          label: `Pin ${pins.value.length + 1}`,
          latitude: location.address.latitude + Math.random() * 10 - 5,
          longitude: location.address.longitude + Math.random() * 10 - 5,
        }

        pins.value.push(pin);
      };

      const removePin = (id: string) => {
        const index = pins.value.findIndex(pin => pin.id === id);
        if (index !== -1) {
          pins.value.splice(index, 1);
        }
      }

      return { args, pins, bounds, addRandomPin, removePin };
    },
    template: `
      <FSMap
        v-model:currentLayer="args.currentLayer"
        :bounds="bounds"
        v-bind="args"
      >
        <template #overlay-body>
          <FSButton @click="addRandomPin">Add Random Pin</FSButton>
          <FSButton @click="removePin(pins[0]?.id)">Remove First Pin</FSButton>
        </template>
        <FSMapMarkerClusterGroup
          :expected-layers="pins.length"
          @update:bounds="bounds = $event"
        >
          <FSMapMarker
            v-for="pin in pins"
            :key="pin.id"
            :latlng="{ lat: pin.latitude, lng: pin.longitude }"
            :label="pin.label"
            variant="pin"
            color="#FF0000"
            @click="removePin(pin.id)"
          />
        </FSMapMarkerClusterGroup>
      </FSMap>
    `,
  }),
};
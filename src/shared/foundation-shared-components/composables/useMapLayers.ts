import { ref, onMounted } from "vue";
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { MapLayers } from '@dative-gpi/foundation-shared-components/models';

export const useMapLayers = () => {
  const { $tr } = useTranslationsProvider();
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? "";

  const layers = ref<any[]>([]);

  onMounted(async () => {
    try {
      const leaflet = await import('leaflet');
      const tileLayer = leaflet.tileLayer;

      layers.value = [
        {
          name: MapLayers.Map,
          label: $tr("ui.map-layer.map", "Map"),
          image: new URL("../assets/images/map/map.png", import.meta.url).href,
          layers: [
            tileLayer(`https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${apiKey}`, {
              maxZoom: 22,
              subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
              attribution: '© Google Map Data',
              className: 'fs-map-tile-base-layer'
            })
          ]
        },
        {
          name: MapLayers.Imagery,
          label: $tr("ui.map-layer.imagery", "Imagery"),
          image: new URL("../assets/images/map/imagery.png", import.meta.url).href,
          layers: [
            tileLayer(`https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}&key=${apiKey}`, {
              maxZoom: 22,
              subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
              attribution: '© Google Map Data',
              className: 'fs-map-tile-base-layer'
            })
          ]
        },
        {
          name: MapLayers.Snow,
          label: $tr("ui.map-layer.snow", "Snow ski map"),
          image: new URL("../assets/images/map/snow.png", import.meta.url).href,
          layers: [
            tileLayer(`https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${apiKey}`, {
              maxZoom: 22,
              subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
              attribution: '© Google Map Data',
              className: 'fs-map-tile-base-layer fs-map-tile-grayscale-layer'
            }),
            tileLayer(`https://tiles.opensnowmap.org/pistes/{z}/{x}/{y}.png`, {
              maxZoom: 18,
              attribution: 'Map data: &copy; OpenStreetMap contributors & ODbL, CC-BY-SA',
              className: 'fs-map-tile-base-layer'
            })
          ]
        }
      ];
    } catch (err) {
      console.error("Leaflet is not installed or failed to load.", err);
      layers.value = [];
    }
  });

  return { layers };
};

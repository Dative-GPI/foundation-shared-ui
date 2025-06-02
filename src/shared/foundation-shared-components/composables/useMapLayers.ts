import { tileLayer } from 'leaflet';

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";

import { MapLayers } from '@dative-gpi/foundation-shared-components/models';

export const useMapLayers = () => {
  const { $tr } = useTranslationsProvider();

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? "";

  const layers = [
    {
      name: MapLayers.Map,
      label: $tr("ui.map-layer.map", "Map"),
      image: new URL("../../assets/images/map/map.png", import.meta.url).href,
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
      image: new URL("../../assets/images/map/imagery.png", import.meta.url).href,
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
      image: new URL("../../assets/images/map/snow.png", import.meta.url).href,
      layers: [
        tileLayer(`https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${apiKey}`, {
          maxZoom: 22,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
          attribution: '© Google Map Data',
          className: 'fs-map-tile-base-layer fs-map-tile-grayscale-layer'
        }),
        tileLayer(`https://tiles.opensnowmap.org/pistes/{z}/{x}/{y}.png`, {
          maxZoom: 18,
          attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors & ODbL, &copy; <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
          className: 'fs-map-tile-base-layer'
        })
      ]
    }
  ];

  return {
    layers
  };
}
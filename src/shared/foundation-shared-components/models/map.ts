import { type Layer } from "leaflet";

export interface MapLayer {
  name : string;
  label: string;
  image: string;
  layer: Layer;
}
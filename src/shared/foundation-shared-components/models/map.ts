import { type Layer } from "leaflet";

export interface MapLayer {
  name : MapLayers;
  label: string;
  image: string;
  layers: Layer[];
}

export enum MapLayers {
  Map = "map",
  Imagery = "imagery",
  Snow= "snow"
}

export enum MapOverlayPositions {
  Expand = "expand",
  Half = "half",
  Collapse = "collapse",
}
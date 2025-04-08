/// <reference types="@types/google.maps" />
import _ from "lodash";

import { Address, type Place } from "@dative-gpi/foundation-shared-domain/models";
import { useAppLanguageCode } from '@dative-gpi/foundation-shared-services/composables';

export const useAddress = () => {
  const enabled = true;
  const { languageCode } = useAppLanguageCode();

  let initialized = false;
  let userLocation: google.maps.LatLngLiteral | null;
  let searchService: google.maps.places.AutocompleteService;
  let placeService: google.maps.places.PlacesService;
  let sessionId: google.maps.places.AutocompleteSessionToken;

  const init = async () => {
    await window.initMap;
    userLocation = await getCurrentLocation();
    searchService = new google.maps.places.AutocompleteService();
    placeService = new google.maps.places.PlacesService(
      document.createElement("div")
    );
    sessionId = new google.maps.places.AutocompleteSessionToken();
    initialized = true;
  }

  const search = async (search: string): Promise<Place[]> => {
    if(!initialized){
      await init();
    } 

    const mapsResults = await _search(search);

    return mapsResults.map((result) => ({
      id: result.place_id,
      label: result.description
    }));
  }

  const get = async (place: Place): Promise<Address> => {
    if(!initialized){
      await init();
    } 

    const response = await _get(place.id);
    sessionId = new google.maps.places.AutocompleteSessionToken();
    if (response.address_components && response.formatted_address && response.geometry) {
      return new Address({
        formattedAddress: response.formatted_address,
        locality: _find(response.address_components, "locality"),
        country: _find(response.address_components, "country"),
        latitude: response.geometry.location?.lat() ?? 0,
        longitude: response.geometry.location?.lng() ?? 0,

        placeId: place.id,
        placeLabel: place.label,
      })
    }
    throw new Error("missing informations");
  }

  const reverseSearch = async (lat: number, lon: number): Promise<Address> => {
    if(!initialized){
      await init();
    }

    return _reverseSearch(lat, lon).then(result => {
      if (result.length > 0) {
        const response = result[0];
        if (response.address_components && response.formatted_address && response.geometry) {
          return new Address({
            formattedAddress: response.formatted_address,
            locality: _find(response.address_components, "locality"),
            country: _find(response.address_components, "country"),
            latitude: response.geometry.location?.lat() ?? 0,
            longitude: response.geometry.location?.lng() ?? 0,
            placeId: response.place_id,
            placeLabel: response.formatted_address
          });
        }
      }
      throw new Error("missing informations");
    });
  }

  const getCurrentLocation = async (): Promise<google.maps.LatLngLiteral | null> => {
    if (!navigator.geolocation) {
      return null;
    }
  
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        () => resolve(null)
      );
    });
  };

  const _search = (search: string) => {
    if (!enabled) {
      throw new Error("offline mode, do not call this method");
    }
    return new Promise<google.maps.places.AutocompletePrediction[]>(
      (resolve, reject) => {
        /**
         * ISO 3166 language code
         */
        const isoLanguageCode = languageCode.value?.split("-")[0];

        searchService!.getPlacePredictions(
          {
            input: search,
            region: isoLanguageCode,
            language: isoLanguageCode,
            sessionToken: sessionId,
            locationBias: userLocation,
          },
          function (result, status) {
            if (status != google.maps.places.PlacesServiceStatus.OK || !result) {
              reject(status);
            } else {
              resolve(result);
            }
          }
        );
      }
    );
  }

  const _reverseSearch = (lat: number, lon: number) => {
    if (!enabled) {
      throw new Error("offline mode, do not call this method");
    }
    return new Promise<google.maps.GeocoderResult[]>((resolve, reject) => {
      new google.maps.Geocoder().geocode(
        {
          location: { lat: lat, lng: lon }
        },
        (result, status) => {
          if (status != google.maps.GeocoderStatus.OK || !result) {
            reject(status);
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  const _get = (id: string) => {
    if (!enabled) {
      throw new Error("offline mode, do not call this method");
    }
    return new Promise<google.maps.places.PlaceResult>((resolve, reject) => {
      placeService!.getDetails(
        {
          placeId: id,
          sessionToken: sessionId!,
          fields: ["formatted_address", "geometry", "address_components", "name"]
        },
        (result, status) => {
          if (status != google.maps.places.PlacesServiceStatus.OK || !result) {
            reject(status);
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  const _find = (components: google.maps.GeocoderAddressComponent[], type: string): string => {
    const found = _.find(components, c =>
      _.some(c.types, t => t === type)
    );
    return found?.long_name ?? "";
  }

  return {
    search,
    get,
    reverseSearch
  }
}
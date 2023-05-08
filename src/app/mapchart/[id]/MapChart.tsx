"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import GoogleMapReact from "google-map-react";

export default function MapChart() {
  const center = { lat: 37.5665, lng: 126.978 };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });
  const [map, setMap] = useState<any>(null);
  const [placesService, setPlacesService] = useState<any>(null);
  const [infoWindow, setInfoWindow] = useState<any>(null);

  useEffect(() => {
    if (!isLoaded || !map) return;
    const placesService = new window.google.maps.places.PlacesService(map);
    setPlacesService(placesService);
  }, [isLoaded, map]);

  const handleMarkerClick = useCallback(
    (marker: google.maps.Marker) => {
      if (!placesService) return;

      placesService.nearbySearch(
        {
          location: marker.getPosition(),
          radius: 500,
          type: ["restaurant"],
        },
        (
          results: google.maps.places.PlaceResult[],
          status: google.maps.places.PlacesServiceStatus
        ) => {
          if (status !== "OK") return;

          const place = results[0];

          if (!infoWindow) {
            const infoWindow = new window.google.maps.InfoWindow({
              content: `<div><h3>${place.name}</h3><p>${place.vicinity}</p></div>`,
            });

            setInfoWindow(infoWindow);
          }

          infoWindow.open(map, marker);
        }
      );
    },
    [placesService, infoWindow, map]
  );

  if (loadError) return <div>Error</div>;
  if (!isLoaded) return <div>Loding...</div>;

  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="map-container"
      onLoad={(map) => setMap(map)}
      onUnmount={() => setMap(null)}
    >
      <Marker position={center} onClick={(e: any) => handleMarkerClick(e)} />
      {/* <Marker position={{ lat: 37.5519, lng: 126.9918 }}></Marker> */}
    </GoogleMap>
  );
}

// NEXT_PUBLIC Next.js의 환경 변수 접두어(prefix)로 이를 사용하면 클라이언트에서 사용 가능한 환경 변수를 설정할 수 있다.

// const [places, setPlaces] = useState([]);
// const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0});
// const [bounds, setBounds] = useState<any>(null);

{
  /* <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        }}
        defaultCenter={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
        }}
        // onChildClick={""}
      ></GoogleMapReact>
    </div> */
}

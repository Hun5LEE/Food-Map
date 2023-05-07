"use client";

import { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

export default function MapChart() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.API_MAP_KEY as string,
  });
  if (!isLoaded) return <div>Loding...</div>;
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName="map-container"
    >
      <Marker position={{ lat: 44, lng: -80 }}></Marker>
    </GoogleMap>
  );
}

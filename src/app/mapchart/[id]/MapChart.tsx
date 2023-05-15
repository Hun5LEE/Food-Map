"use client";

import { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  InfoWindow,
} from "@react-google-maps/api";

export default function MapChart() {
  const [places, setPlaces] = useState<any>([]);
  const [selectedPlace, setSelectedPlace] = useState<any>(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: ["places"],
  });

  useEffect(() => {
    if (!isLoaded || loadError) return;

    const map = new google.maps.Map(document.createElement("div"));
    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(
      {
        location: { lat: 37.5914038, lng: 127.2168206 },
        radius: 500,
        type: "restaurant",
      },
      (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          setPlaces(results);
        }
      }
    );
  }, [isLoaded, loadError]);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loding...</div>;
  console.log(places);

  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 37.5914038, lng: 127.2168206 }}
      mapContainerClassName="map-container"
    >
      {places.map((place: any) => (
        <Marker
          key={place.place_id}
          position={{
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          }}
          icon={{
            url: "/home_bg.jpg",
            scaledSize: new window.google.maps.Size(75, 75),
          }}
          onClick={() => setSelectedPlace(place)}
        />
      ))}
      {selectedPlace && (
        <InfoWindow
          position={{
            lat: selectedPlace.geometry.location.lat(),
            lng: selectedPlace.geometry.location.lng(),
          }}
          onCloseClick={() => setSelectedPlace(null)}
        >
          <div>
            <h2>{selectedPlace.name}</h2>
            <img
              src={selectedPlace.photos?.[0].getUrl()}
              width={50}
              height={50}
            />
            <p>{selectedPlace.vicinity}</p>
            <p>{selectedPlace.rating}</p>
          </div>
        </InfoWindow>
      )}
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

import React, { useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
  Circle,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const estilo = {
    width: "100vw",
    height: "100vh",
  };

  return (
    <>
      <MapContainer
        style={estilo}
        center={[-15.793889, -47.882778]}
        zoom={15}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        <FeatureGroup>
          <Popup minWidth={300}></Popup>
          <Circle center={[-15.793889, -47.882778]} radius={200} />
        </FeatureGroup>
      </MapContainer>
    </>
  );
};

export default MapComponent;

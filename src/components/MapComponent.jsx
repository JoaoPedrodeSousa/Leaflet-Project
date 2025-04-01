import React, { useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
} from "react-leaflet";
import "../styles/componets/Map.css";
import PopupComponent from "./PopupComponent.jsx";

const MapComponent = () => {
  return (
    <>
      <MapContainer
        className="map"
        center={[-15.793889, -47.882778]}
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <FeatureGroup>
          <Marker position={[-15.793889, -47.882778]}>
            <Popup minWidth={400}>
              <PopupComponent src="/src/assets/imagem1.jpg" />
            </Popup>
          </Marker>
        </FeatureGroup>
      </MapContainer>
    </>
  );
};

export default MapComponent;

import React, { useRef } from "react";
import MapComponent from "./MapComponent";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <div>
      <MapComponent />
    </div>
  );
}

export default App;

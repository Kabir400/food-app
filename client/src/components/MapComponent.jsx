import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon issue with Webpack
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapComponent = ({ latitude, longitude }) => {
  return (
    <MapContainer
      center={[latitude, longitude]} // Coordinates to center the map
      zoom={13} // Initial zoom level
      style={{ height: "500px", width: "100%" }} // Map dimensions
    >
      {/* Tile Layer for the base map */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marker to show the provided location */}
      <Marker position={[latitude, longitude]}>
        <Popup>
          A marker at Latitude: {latitude}, Longitude: {longitude}.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MapView({ alerts }) {
  return (
    <MapContainer
      center={[-8.05, -34.9]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {alerts.map((alert, index) => (
        <Marker key={index} position={[alert.lat, alert.lng]}>
          <Popup>{alert.message}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;
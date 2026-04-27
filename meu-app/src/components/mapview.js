import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const redIcon = new L.Icon({
  iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
  iconSize: [32, 32],
});

export default function MapView({ alerts }) {
  return (
    <MapContainer
      center={[-8.05, -34.9]} // Recife
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {alerts.map((alert) => (
        <Marker
          key={alert.id}
          position={[alert.lat, alert.lng]}
          icon={redIcon}
        >
          <Popup>
            🚨 Emergência <br />
            {alert.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
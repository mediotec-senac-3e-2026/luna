import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import AlertaMarker from "../alerta/AlertaMarker";

export default function RealTimeMap({ alertas }) {
    const center = [-8.05428, -34.8813];

    return (
        <MapContainer
        center={center}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
        zoomControl={true}
        >
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {alertas.map((alerta) => (
                <AlertaMarker key={alerta.id} alerta={alerta} />
            ))}
        </MapContainer>
    );
}
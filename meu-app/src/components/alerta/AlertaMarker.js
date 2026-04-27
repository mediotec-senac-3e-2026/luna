import { Marker, Popup } from 'react-leaflet';
import L from "leaflet";

const pulsingIcon = new L.DivIcon({
    className: "custom-div-icon",
    html: `
    <div style="witdh: 24px; height: 24px; position: relative;">
    <div style="position: absolute; width: 24px; height: 24px; background: #ef4444; border-radius: 50%; animation: ping 2s infinite;"></div>
      <div style="position: absolute; width: 24px; height: 24px; background: #ef4444; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
        <div style="width: 10px; height: 10px; background: white; border-radius: 50%;"></div>
      </div>
    </div>`, 
    iconSize: [24, 24],
    iconAnchor: [12, 12],
});

export default function AlertaMarker({ alerta }) {
    return(
        <Marker position={[alerta.lat, alerta.lng]} icon={pulsingIcon} >
            <Popup>
                <strong>{alerta.tipo}</strong><br />
                {alerta.enderecoAprox}<br />
                <small>{alerta.horario}</small>
            </Popup>
        </Marker>

    );

}
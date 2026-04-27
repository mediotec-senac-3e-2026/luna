import { useEffect, useState } from "react";
import MapView from '../components/MapView.js';
import AlertCard from "../components/AlertCard.js";
import { generateAlert } from "../services/fakeAlerts.js";

export default function Dashboard() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAlert = generateAlert();
      setAlerts((prev) => [newAlert, ...prev]);
    }, 5000); // novo alerta a cada 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "flex", height: "100%" }}>
      
      {/* Sidebar */}
      <div style={{
        width: "300px",
        background: "#1a0000",
        padding: "10px",
        overflowY: "auto"
      }}>
        <h2 style={{ color: "white" }}>🚨 Alertas</h2>

        {alerts.map(alert => (
          <AlertCard key={alert.id} alert={alert} />
        ))}
      </div>

      {/* Mapa */}
      <div style={{ flex: 1 }}>
        <MapView alerts={alerts} />
      </div>
    </div>
  );
}
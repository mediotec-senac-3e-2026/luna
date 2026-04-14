import {userEffect, useState} from "react";
import MapView from "../components/mapview";
import AlertCard from "../components/alertcard";

function Dashboard() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAlert = {
        lat: -8.05 + Math.random() * 0.02,
        lng: -34.9 + Math.random() * 0.02,
        message: "Emergência acionada",
        time: new Date().toLocaleTimeString(),
      };

      setAlerts((prev) => [newAlert, ...prev]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <MapView alerts={alerts} />

      <div className="alerts-container">
        {alerts.map((alert, index) => (
          <AlertCard key={index} alert={alert} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
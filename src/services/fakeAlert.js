export function generateAlert() {
  return {
    id: Date.now(),
    lat: -8.05 + (Math.random() - 0.5) * 0.02,
    lng: -34.9 + (Math.random() - 0.5) * 0.02,
    description: "Usuária relatou situação de risco",
    time: new Date().toLocaleTimeString()
  };
}
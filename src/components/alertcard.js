export default function AlertCard({ alert }) {
  return (
    <div style={{
      background: "#2b0a0a",
      color: "#fff",
      padding: "10px",
      marginBottom: "10px",
      borderLeft: "5px solid red",
      borderRadius: "5px"
    }}>
      <strong>🚨 Emergência</strong>
      <p>{alert.description}</p>
      <small>{alert.time}</small>
    </div>
  );
}
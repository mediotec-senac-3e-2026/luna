function AlertCard({ alert }){
    return(
        <div className="slert-card">
            <strong>🚨 ALERTA</strong>
            <p>{alert.message}</p>
            <small>{alert.time}</small>
        </div>
    );
}

export default AlertCard;
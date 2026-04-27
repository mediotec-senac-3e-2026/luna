
// LOGIN
function abrirLogin(){
  document.getElementById("modal").style.display="flex";
}

function login(){
  window.location.href="diario.html";
}

// SINTOMAS
function registrar(tipo){
  const msg = document.getElementById("msg");
  msg.innerText = "Registrado: " + tipo;
}

// EMERGÊNCIA
function emergencia(){
  const msg = document.getElementById("msg");
  msg.innerText = "ALERTA REGISTRADO";
}

// CHECKIN
function checkin(){
  alert("Check-in realizado");
}

// SAIR
function saidaRapida(){
  window.location.href="https://www.google.com";
}
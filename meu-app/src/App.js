
// LOGIN SIMPLES
function abrirLogin(){
  document.getElementById("modal").style.display="flex";
}

function login(){
  window.location.href="diario.html";
}

// SINTOMAS
function registrar(tipo){
  const msg = document.getElementById("msg");
  msg.innerText = "Sintoma registrado: " + tipo;
  msg.style.display = "block";
}

// EMERGÊNCIA
function emergencia(){
  const msg = document.getElementById("msg");
  msg.innerText = "Sintoma intenso registrado. Monitoramento ativado.";
  msg.style.display = "block";
}

// SAÍDA RÁPIDA
function saidaRapida(){
  window.location.href = "https://www.google.com";
}

// CHECKIN
function checkin(){
  alert("Check-in realizado com sucesso");
}

// DASHBOARD CHART
window.onload = function(){
  const ctx = document.getElementById("grafico");
  if(ctx){
    new Chart(ctx, {
      type:"bar",
      data:{
        labels:["Manhã","Tarde","Noite"],
        datasets:[{
          label:"Alertas",
          data:[5,10,7],
          backgroundColor:"red"
        }]
      }
    });
  }
}
function confirmar() {
  document.getElementById("msg").innerText = "Presença confirmada ✨";
}

// CONTAGEM REGRESSIVA
const dataEvento = new Date("Jun 13, 2026 19:30:00").getTime();

setInterval(function() {
  const agora = new Date().getTime();
  const tempo = dataEvento - agora;

  const dias = Math.floor(tempo / (1000 * 60 * 60 * 24));
  const horas = Math.floor((tempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((tempo % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("countdown").innerHTML =
    "⏳ Faltam " + dias + " dias, " + horas + "h e " + minutos + "min";
}, 1000);
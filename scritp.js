let segundos = 0;
let intervalo = null;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

startBtn.addEventListener("click", Iniciar);
pauseBtn.addEventListener("click", pausar);
resetBtn.addEventListener("click", recomecar);

function Iniciar() {
  if (intervalo) return;

  intervalo = setInterval(() => {
    segundos++;
    atualizaDisplay();
  }, 1000);
}

function pausar() {
    clearInterval(intervalo);
    intervalo = null
}

function recomecar() {
    pausar();
    segundos = 0;
    atualizaDisplay();
}

function formatarTempo(segundosTotais) {
  const minutos = Math.floor(segundosTotais / 60);
  const segundos = segundosTotais % 60;
  return `${String(minutos).padStart(2,'0')}:${String(segundos).padStart(2,'0')}`;
}

function atualizaDisplay() {
  display.textContent = formatarTempo(segundos);
}

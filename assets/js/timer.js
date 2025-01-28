const clockFunction = () => {
  const relogio = document.querySelector(".relogio");
  const iniciar = document.querySelector(".iniciar");
  const pausar = document.querySelector(".pausar");
  const zerar = document.querySelector(".zerar");

  const getSecondsTime = (seconds) => {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  };
  let seconds = 0;
  let timer;
  const setTime = () => {
    timer = setInterval(function () {
      seconds++;
      relogio.innerHTML = getSecondsTime(seconds);
    }, 1000);
  };
  iniciar.addEventListener("click", function (e) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    setTime();
  });
  pausar.addEventListener("click", function (e) {
    relogio.classList.add("pausado");
    clearInterval(timer);
  });
  zerar.addEventListener("click", function (e) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    seconds = 0;
  });
};
clockFunction();

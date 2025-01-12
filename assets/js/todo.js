const inputTarefa = document.querySelector(".input-tarefa");
const bntTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

const criadorDeTarefa = (textoInput) => {
  const newTarefa = `<li class="tarefa">
          <input type="checkbox" />
          <p>${textoInput}</p>
          <button class="apagar">apagar</button>
        </li>`;
  tarefas.innerHTML += newTarefa;
};

tarefas.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
  }
});

bntTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  criadorDeTarefa(inputTarefa.value);
});

inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode == 13) {
    if (!inputTarefa.value) return;
    criadorDeTarefa(inputTarefa.value);
  }
});

const salvarTarefas = () => {
  const liTarefas = document.querySelectorAll("p");
  console.log(liTarefas);

  const listaDeTarefas = [];
  for (const tarefas of liTarefas) {
  }
  console.log(listaDeTarefas);
};
salvarTarefas();

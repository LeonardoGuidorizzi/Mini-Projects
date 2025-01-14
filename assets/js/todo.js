const inputTarefa = document.querySelector(".input-tarefa");
const bntTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

// const banco = [
//   { tarefa: "Estudar", status: "" },
//   { tarefa: "Sarrafar", status: "" },
// ];
const getBanco = () => JSON.parse(localStorage.getItem("tarefas")) ?? [];
const setBanco = (banco) =>
  localStorage.setItem("tarefas", JSON.stringify(banco));

const criadorDeTarefa = (indice, textoInput, status) => {
  const newTarefa = `<li class="tarefa">
          <input type="checkbox"${status} data-indice="${indice}" />
          <p>${textoInput}</p>
          <button class="apagar" data-indice="${indice}">apagar</button>
        </li>`;
  tarefas.innerHTML += newTarefa;
};
const limparTarefas = () => {
  const tarefas = document.querySelector(".tarefas");
  while (tarefas.firstChild) {
    tarefas.removeChild(tarefas.lastChild);
  }
};

const atulizarTela = () => {
  limparTarefas();
  const banco = getBanco();
  banco.forEach((item, indice) =>
    criadorDeTarefa(indice, item.tarefa, item.status)
  );
};
function inserirTarefa(valueInput) {
  const banco = getBanco();
  banco.push({ tarefa: valueInput, status: "" });
  setBanco(banco);
  atulizarTela();
  inputTarefa.value = "";
}
function removerTarefa(indice) {
  const banco = getBanco();
  banco.splice(indice, 1);
  setBanco(banco);
  atulizarTela();
}
function atualizarItem(indice) {
  const banco = getBanco();
  banco[indice].status = banco[indice].status === "" ? "checked" : "";
  setBanco(banco);
  atulizarTela();
}
const clickItem = (e) => {
  const el = e.target;
  console.log(el);

  if (el.classList.contains("apagar")) {
    const indice = el.dataset.indice;
    console.log(indice);

    removerTarefa(indice);
  } else if (el.type === "checkbox") {
    const indice = el.dataset.indice;
    atualizarItem(indice);
  }
};
tarefas.addEventListener("click", clickItem);

bntTarefa.addEventListener("click", function () {
  const valueInput = inputTarefa.value.trim();
  inserirTarefa(valueInput);
});
inputTarefa.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    const valueInput = inputTarefa.value.trim();
    inserirTarefa(valueInput);
  }
});

atulizarTela();

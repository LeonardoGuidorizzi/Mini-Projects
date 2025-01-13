const inputTarefa = document.querySelector(".input-tarefa");
const bntTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");
const banco = [
  { tarefa: "Estudar", status: "" },
  { tarefa: "Sarrafar", status: "" },
];

const criadorDeTarefa = (indice, textoInput, status) => {
  const newTarefa = `<li class="tarefa">
          <input type="checkbox"${status} data-indice=${indice} />
          <p>${textoInput}</p>
          <button class="apagar">apagar</button data-indice=${indice}>
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
  banco.forEach((item, indice) =>
    criadorDeTarefa(indice, item.tarefa, item.status)
  );
};
function inserirTarefa(valueInput) {
  banco.push({ tarefa: valueInput, status: "" });
  inputTarefa.value = "";
  atulizarTela();
}
bntTarefa.addEventListener("click", function () {
  const valueInput = inputTarefa.value.trim();
  if (!inputTarefa.value) return;
  inserirTarefa(valueInput);
});
inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode == 13) {
    if (!inputTarefa.value) return;
    const valueInput = inputTarefa.value.trim;
    inserirTarefa(valueInput);
  }
});

atulizarTela();
// banco.forEach((item, indice) => {
//   criadorDeTarefa(item.indice, item.tarefa, indice);
// });
// localStorage.setItem("banco", JSON.stringify(banco));
// const atulizarTela = () => {
//   const banco = getBanco();
//   banco.forEach((item, indice) =>
//     criadorDeTarefa(item.tarefa, item.status, indice)
//   );

// };
// const atulizarItem = () => {
//   banco.forEach((item) => criadorDeTarefa(item.tarefa, item.status, indice));
// };
// atulizarItem();

// const getBanco = () => {
//   JSON.parse(localStorage.getItem("tarefas")) ?? [];
// };

// tarefas.addEventListener("click", function (e) {
//   const el = e.target;
//   if (el.classList.contains("apagar")) {
//     el.parentElement.remove();
//   }
// });

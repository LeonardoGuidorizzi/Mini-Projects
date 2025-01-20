"use strict";
function TodoList() {
  this.inputTask = document.querySelector(".input-tarefa");
  this.bntTask = document.querySelector(".btn-tarefa");
  this.task = document.querySelector(".tarefas");
  this.dataBase = [{ tarefa: "tarefa1", status: "checked" }];
  this.taskCreator = (index, inputValue, status) => {
    const newTask = `<li class="tarefa">
               <input type="checkbox"${status} data-indice="${index}" />
               <p>${inputValue}</p>
               <button class="apagar" data-indice="${index}">apagar</button>
            </li>`;
    this.task.innerHTML += newTask;
  };
  this.dataBase.forEach((task, index) => {
    this.taskCreator(index, task.tarefa, task.status);
  });

  this.insertTask = (inputValue) => {
    this.dataBase.push({ tarefa: inputValue, status: "" });
  };

  this.bntTask.addEventListener(
    "click",
    function () {
      const valueInput = this.inputTask.value.trim();
      this.taskCreator(valueInput);
    }.bind(this)
  );
  this.inputTask.addEventListener(
    "keyUp",
    function (e) {
      if (e.key === "Enter") {
      }
    }.bind
  );
}
new TodoList();
// const todo = new TodoList();

// localStorage.setItem("tarefas", JSON.stringify(dataBase));
// console.log(dataBase);

// const savingData = JSON.parse(dataBase);
// console.log(dataBase);

// console.log(savingData);

// const inputTarefa = document.querySelector(".input-tarefa");
// const bntTarefa = document.querySelector(".btn-tarefa");
// const tarefas = document.querySelector(".tarefas");

// const getBanco = () => JSON.parse(localStorage.getItem("tarefas")) ?? [];
// const setBanco = (banco) =>
//   localStorage.setItem("tarefas", JSON.stringify(banco));

// const criadorDeTarefa = (indice, textoInput, status) => {
//   const newTarefa = `<li class="tarefa">
//           <input type="checkbox"${status} data-indice="${indice}" />
//           <p>${textoInput}</p>
//           <button class="apagar" data-indice="${indice}">apagar</button>
//         </li>`;
//   tarefas.innerHTML += newTarefa;
// };

// function inserirTarefa(valueInput) {
//   const banco = getBanco();
//   banco.push({ tarefa: valueInput, status: "" });
//   setBanco(banco);
//   atulizarTela();
//   inputTarefa.value = "";
// }
// const limparTarefas = () => {
//   const tarefas = document.querySelector(".tarefas");
//   while (tarefas.firstChild) {
//     tarefas.removeChild(tarefas.lastChild);
//   }
// };

// const atulizarTela = () => {
//   limparTarefas();
//   const banco = getBanco();
//   banco.forEach((item, indice) =>
//     criadorDeTarefa(indice, item.tarefa, item.status)
//   );
// };

// function removerTarefa(indice) {
//   const banco = getBanco();
//   banco.splice(indice, 1);
//   setBanco(banco);
//   atulizarTela();
// }
// function atualizarItem(indice) {
//   const banco = getBanco();
//   banco[indice].status = banco[indice].status === "" ? "checked" : "";
//   setBanco(banco);
//   atulizarTela();
// }
// const clickItem = (e) => {
//   const el = e.target;
//   console.log(el);

//   if (el.classList.contains("apagar")) {
//     const indice = el.dataset.indice;
//     console.log(indice);

//     removerTarefa(indice);
//   } else if (el.type === "checkbox") {
//     const indice = el.dataset.indice;
//     atualizarItem(indice);
//   }
// };

// tarefas.addEventListener("click", clickItem);

// bntTarefa.addEventListener("click", function () {
//   const valueInput = inputTarefa.value.trim();
//   inserirTarefa(valueInput);
// });

// inputTarefa.addEventListener("keyup", function (e) {
//   if (e.key === "Enter") {
//     const valueInput = inputTarefa.value.trim();
//     inserirTarefa(valueInput);
//   }
// });

// atulizarTela();

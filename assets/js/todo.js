"use strict";
function TodoList() {
  this.inputTask = document.querySelector(".input-tarefa");
  this.bntTask = document.querySelector(".btn-tarefa");
  this.task = document.querySelector(".tarefas");
  this.dataBase = JSON.parse(localStorage.getItem("tasks")) || [];
  this.taskCreator = (index, inputValue, status) => {
    const newTask = `<li class="tarefa">
               <input type="checkbox"${status} data-index="${index}" />
               <p>${inputValue}</p>
               <button class="apagar" data-index="${index}">apagar</button>
            </li>`;
    this.task.innerHTML += newTask;
  };
  this.insertTask = (inputValue) => {
    this.dataBase.push({ tarefa: inputValue, status: "" });
    this.saveTasks();
    this.reloadTasks();
  };

  this.deleteItem = (index) => {
    this.dataBase.splice(index, 1);
    this.saveTasks();
    this.reloadTasks();
  };
  this.checkedTasks = (index) => {
    this.dataBase[index].status =
      this.dataBase[index].status === "" ? "checked" : "";
    this.saveTasks();
    this.reloadTasks();
  };

  this.itemFunctions = (e) => {
    const el = e.target;
    const taskIndex = Number(el.dataset.index);
    if (el.classList.contains("apagar")) {
      this.taskIndex;
      this.deleteItem(taskIndex);
    } else if (el.type === "checkbox") {
      this.taskIndex;
      this.checkedTasks(taskIndex);
    }
  };

  this.task.addEventListener("click", this.itemFunctions);

  this.cleanTasks = () => {
    while (this.task.firstChild) {
      this.task.removeChild(this.task.lastChild);
    }
  };

  this.reloadTasks = () => {
    this.cleanTasks();
    this.dataBase.forEach((item, index) => {
      this.taskCreator(index, item.tarefa, item.status);
    });
  };

  this.saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(this.dataBase));
  };

  this.addTask = () => {
    const valueInput = this.inputTask.value.trim();
    if (valueInput) {
      this.insertTask(valueInput);
      this.inputTask.value = "";
    }
  };

  this.bntTask.addEventListener("click", this.addTask);
  this.inputTask.addEventListener("keyup", (e) => {
    if (e.key === "Enter") this.addTask();
  });
  this.reloadTasks();
}
new TodoList();

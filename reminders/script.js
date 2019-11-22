class Todo {
  constructor(info) {
    this.text = info.text;
    this.completed = info.completed || false;
    this.id =
      info.id ||
      Math.random()
        .toString(36)
        .substring(7);
  }
}

var toDoList = getToDos() || [];

function createItem() {
  var newToDo = addNewTodo();
  updateTodoList(newToDo);
  saveTodosLocally();
  addToDoToHTML(newToDo);
  console.log(toDoList);
}

// function checkIfCompleted(event) {
//     var thisElement = event.target;
//     var currentTodo = new Todo(thisElement);
//     currentTodo.toggleDone();
// }

function checkIfCompleted(event, btn) {
  for (i = 0; i < toDoList.length; i++) {
    if (btn.id != toDoList[i].id) {
      continue;
    } else if (toDoList[i].id === btn.id && btn.checked === true) {
      toDoList[i].completed = true;
    } else {
      toDoList[i].completed = false;
    }
    console.log(toDoList);
  }
  event.stopPropagation();
}

function addNewTodo() {
  var input = getInputValue();
  var newToDo = new Todo({ text: input });
  return newToDo;
}

function updateTodoList(newItem) {
  toDoList.push(newItem);
}

function debug(event) {
  // checkIfCompleted(event);
}

function getInputValue() {
  var input = document.getElementById("input").value;
  return input;
}

function saveTodosLocally() {
  var stringified = JSON.stringify(toDoList);
  localStorage.setItem("todos", stringified);
}

function getToDos() {
  var t = localStorage.getItem("todos");
  var j = JSON.parse(t);
  if (j) {
    for (var i = 0; i < j.length; i++) {
      j[i] = new Todo(j[i]);
    }
  }
  return j;
}

function addToDoToHTML(item) {
  var todoContainer = document.getElementById("todo");
  todoContainer.insertAdjacentHTML(
    "beforeend",
    '<p onclick="debug(event)"><input type="checkbox" class="box" onclick="checkIfCompleted(event, this)" id="' +
      item.id +
      '"> ' +
      item.text +
      "</p>"
  );
  todoContainer.insertAdjacentHTML("beforeend", "<hr>");
}

function loopThroughAllTodos() {
  for (var i = 0; i < toDoList.length; i++) {
    addToDoToHTML(toDoList[i]);
  }
}
document.onload = loopThroughAllTodos();

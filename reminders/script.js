var toDoList = getToDos() || [];


function createItem() {
    var newToDo = addNewTodo();
    updateTodoList(newToDo);
    saveTodosLocally();
    addToDoToHTML(newToDo);
    console.log(toDoList);
   }

class Todo {
    constructor (text, completed, id) {
        this.text = text;
        this.completed = completed || false;
        this.id = id || Math.random().toString(36).substring(7);
    }

}
// toDoList[i].id === btn.id && 

function validate(btn) {
    console.log(typeof(btn.id));
    for (i = 0; i < toDoList.length; i++) {
        if (toDoList[i].id === btn.id && btn.checked === true) {
            toDoList[i].completed = true;
            console.log("first loop")
            console.log(btn.id);
        } else {
            toDoList[i].completed = false;
            console.log("second loop")
            console.log(btn.id);
        }
        console.log(toDoList);
    }
}
function addNewTodo() {
    var input = getInputValue();
    var newToDo = new Todo(input);
    return newToDo;
}

function updateTodoList(newItem) {
    toDoList.push(newItem);
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
    return j;
}

function addToDoToHTML(item) {
    var todoContainer = document.getElementById("todo");
    todoContainer.insertAdjacentHTML('beforeend', '<p><input type="checkbox" class="box" onclick="validate(this)" id="' + item.id +  '"> ' + item.text + '</p>');
}

function loopThroughAllTodos() {
    for (var i = 0; i < toDoList.length; i++) {
        addToDoToHTML(toDoList[i])
    }
}
document.onload = loopThroughAllTodos();
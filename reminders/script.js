var toDoList = getToDos() || [];


function createItem() {
    // var input = document.getElementById("input").value;
    // getInputValue();
    // var newToDo = new Todo(input);
    var newToDo = addNewTodo();
    // toDoList.push(newToDo);
    updateTodoList(newToDo);
    saveTodosLocally();
    // var todo = document.getElementById("todo");
    // todo.insertAdjacentHTML('beforeend', '<input type="checkbox"> ' + newToDo.text + '<br>');
    addToDoToHTML(newToDo);
    console.log(toDoList[0].id);
    console.log(newToDo.id);
   }

class Todo {
    constructor (text, completed, id) {
        this.text = text;
        this.completed = completed || false;
        this.id = id || Math.random().toString(36).substring(7);
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
    todoContainer.insertAdjacentHTML('beforeend', '<p><input type="checkbox"> ' + item.text + '</p>');
}

function loopThroughAllTodos() {
    for (var i = 0; i < toDoList.length; i++) {
        addToDoToHTML(toDoList[i])
    }
}
document.onload = loopThroughAllTodos();
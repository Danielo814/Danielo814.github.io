function createItem() {
    var list = document.getElementById("list-items").value;
    var todo = document.getElementById("todo");
    todo.insertAdjacentHTML('beforeend', '<input type="checkbox"> ' + list + '<br>');
    console.log(list)
}
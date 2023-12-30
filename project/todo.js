// todo.js
let todoCount = 0;

function addTodo() {
    var todoInput = document.getElementById("todo-input");
    var todoText = todoInput.value;

    if (todoText.trim() !== "") {
        todoCount++;

        var todoList = document.getElementById("todo-list");
        var newTodoItem = document.createElement("li");
        newTodoItem.innerHTML = `<span>${todoCount}. </span>${todoText} <button onclick="completeTodo(this)">Complete</button>`;
        todoList.appendChild(newTodoItem);

        todoInput.value = "";
    }
}

function completeTodo(button) {
    var listItem = button.parentElement;
    listItem.style.textDecoration = "line-through";
    listItem.style.color = "#95a5a6";
    button.style.display = "none";
}

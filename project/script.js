// To-Do Section
function addTodo() {
    var todoInput = document.getElementById("todo-input");
    var todoText = todoInput.value;

    if (todoText.trim() !== "") {
        var todoList = document.getElementById("todo-list");
        var newTodoItem = document.createElement("li");
        newTodoItem.textContent = todoText;
        todoList.appendChild(newTodoItem);
        todoInput.value = "";
    }
}

// Diary Section
function addDiaryEntry() {
    var diaryEntry = document.getElementById("diary-entry");
    var entryText = diaryEntry.value;

    if (entryText.trim() !== "") {
        alert("Diary Entry Added:\n" + entryText);
        diaryEntry.value = "";
    }
}

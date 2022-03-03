const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let todos = [];

const KEY_TODOS = "todos";

function saveTodos() {
    localStorage.setItem(KEY_TODOS, JSON.stringify(todos));
}

function onTodoSubmit(event) {
    event.preventDefault();
    const newTodo = {
        id: Date.now(),
        text: todoInput.value,
    };
    todos.push(newTodo);
    paintTodo(newTodo);
    saveTodos();
    todoInput.value = "";
}

function onTodoDelete(event) {
    // console.log(event.path);
    // console.dir(event.target.parentNode);
    // console.dir(event.target.parentElement);
    const li = event.target.parentElement;
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    li.remove();
    saveTodos();
}

function paintTodo(todo) {
    // Create HTML element <li><span></span></li>
    const li = document.createElement("li");
    const button = document.createElement("button");
    const span = document.createElement("span");
    button.innerText = "X";
    button.addEventListener("click", onTodoDelete);
    li.appendChild(button);
    li.appendChild(span);

    li.id = todo.id;
    span.innerText = todo.text;
    todoList.append(li);
}

function init() {
    todoForm.addEventListener("submit", onTodoSubmit);

    const savedTodos = localStorage.getItem(KEY_TODOS);
    if (savedTodos !== null) {
        todos = JSON.parse(savedTodos);
        todos.forEach((item) => paintTodo(item));
    }
}
init();

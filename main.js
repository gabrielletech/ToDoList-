//Selectors
const todoInput = document.getElementById('todo-input');
const addTodo = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');


//EventListeners
addTodo.addEventListener('click', addTodoItem);


//Functions
function addTodoItem(event) {
    //prevent form from submitting
    event.preventDefault();

    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //create list
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput;
    newTodo.classList.add('list-group-item');
    todoDiv.appendChild(newTodo);

    //completed button 
    const completed = document.createElement('button');
    completed.innerHTML = 'Completed';
    completed.classList.add('complete-btn');
    todoDiv.appendChild(completed);

    //delete button 
    const deleted = document.createElement('button');
    deleted.innerHTML = 'Delete';
    deleted.classList.add('delete-btn');
    todoDiv.appendChild(deleted);

    //append to list 
    todoList.appendChild(todoDiv);
}
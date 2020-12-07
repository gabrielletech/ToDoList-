//Selectors
const todoInput = document.getElementById('todo-input');
const addTodo = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');


//EventListeners
addTodo.addEventListener('click', addTodoItem);
todoList.addEventListener('click', checkDelete);


//Functions
function addTodoItem(event) {
    //prevent form from submitting
    event.preventDefault();

    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //create list
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('list-item');
    todoDiv.appendChild(newTodo);

    //completed button 
    const completed = document.createElement('button');
    completed.innerHTML = '<i class="far fa-check-circle"></i>';
    completed.classList.add('complete-btn');
    todoDiv.appendChild(completed);

    //delete button 
    const deleted = document.createElement('button');
    deleted.innerHTML = '<i class="far fa-times-circle"></i>';
    deleted.classList.add('delete-btn');
    todoDiv.appendChild(deleted);

    //append to list 
    todoList.appendChild(todoDiv);

    //clear to do input value 
    todoInput.value = '';
}

function checkDelete(event) {
    const item = event.target;

    //delete todo item 
    if(item.classList[0] === 'delete-btn') {
    const todo = item.parentElement;
    //animation
    todo.classList.add('fall');
    //waits for animation to end
    todo.addEventListener('transitionend', function(){
        todo.remove();
    })
    }

    //checked todo item 
    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

// Sign in/log in Functions 

// Signup Successful modal 
function signin() {
   var signinModal = document.getElementById('signin').style.display="block";

   // when the user clicks anywhere outside of the modal, close it 
   window.onclick = function(e) {
       if(e.target == signinModal) {
           signinModal.style.display = "none"
       }
   }
}
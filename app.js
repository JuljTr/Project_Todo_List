//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions

function addTodo(event) {
    //prevent form from submitting 
    event.preventDefault();

    //Create Todo div element
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create list items li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');

    //placing li into the div element 
    todoDiv.appendChild(newTodo);

    //Check mark button
    const completedButton = document.createElement('button');
    //adding icon 
    completedButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //Check trash button
    const trashButton = document.createElement('button');
    //adding icon 
    trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);

    //Clear Todo Input value
    todoInput.value = '';
}

function deleteCheck(e) {
    //target the element that is deleted
    const item = e.target;

    //Delete todo 
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.remove();
    }

    // Check Mark
    if(item.classList[0] === 'complete-btn') { 
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
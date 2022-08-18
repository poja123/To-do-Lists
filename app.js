//Selectors
const todoInput = document.querySelector('.to-do-input');
const todoButton = document.querySelector('.to-do-button');
const todoList = document.querySelector('.to-do-list');
const filterOption = document.querySelector('.filter-todo');
//EventListener
document.addEventListener('DOMContentLoaded',getTodos);
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterToDo);

//Functions
function addTodo(event) {
    //Prevents frm refrshng pg  aftr click btn
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Add to do local str
    saveLocalTodos(todoInput.value);
    //Create Button check
    const check = document.createElement('button');
    check.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    check.classList.add('check-btn');
    todoDiv.appendChild(check);
    //Create Button Trash
    const trash = document.createElement('button');
    trash.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    trash.classList.add('trash-btn');
    todoDiv.appendChild(trash);

    //Append list
    todoList.appendChild(todoDiv);

    //Clear input
    todoInput.value = "";


}

function deleteCheck(e) {
    const item = e.target;
    //delete
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        removeLocalTodos(todo);
        todo.remove();
    }
    //check
    if (item.classList[0] === "check-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
function filterToDo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                }
                else {

                    todo.style.display = "none";


                }
                break;
            case "incompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                }
                else {
                    todo.style.display = "none";


                }
                break;

        }
    });


}
function saveLocalTodos(todo) {
    //Check is already 
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}
function getTodos()
{
    //Check is already 
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo)
    {
        //Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Create Button check
    const check = document.createElement('button');
    check.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    check.classList.add('check-btn');
    todoDiv.appendChild(check);
    //Create Button Trash
    const trash = document.createElement('button');
    trash.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    trash.classList.add('trash-btn');
    todoDiv.appendChild(trash);

    //Append list
    todoList.appendChild(todoDiv);



    //filter
    
    
    

    

    });
    
}

function removeLocalTodos(todo)
{
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
   
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem("todos",JSON.stringify(todos));
}



 //<div class="todo">
 //<li></li>
 //<button>Delete</button>
 //<button>Checked</button>
//</div>
// DataService.getTodos(console.log)

DataService.getTodos()
.then(data => Todolist.fromObjectArray('lista figa', data))
.then(todoList => displayTodos(todoList));

// function transformData(data) {

//     const newTodoList = new Todolist('Lista Base');
//     for (let i = 0; i < data.length; i++) {
//         const todoObject = data[i];
//         const newTodo = new Todo(todoObject.title, todoObject.creationDate, todoObject.isCompleted, todoObject.id)
//         newTodoList.addTodo(newTodo);
//     }
//     console.log(newTodoList)
// }

function displayTodos(todoList) {
    const todoListTitle = document.getElementById('list-name');
    const todoListUl = document.getElementById('todo-list');

    const titleNode = document.createTextNode(todoList.title);
    todoListTitle.appendChild(titleNode);
    todoListUl.innerHTML = '';

    for (let i = 0; i < todoList.todoArray.length; i++) {
        const todo = todoList.todoArray[i];
        const newLi = document.createElement('li');
        newLi.classList.add('todo-li');

        const titleSpan= document.createElement('span');
        titleSpan.classList.add('todo-title')

        const dateSpan= document.createElement('span');
        dateSpan.classList.add('todo-date');


        const titleNode = document.createTextNode(todo.title);
        const dateNode= document.createTextNode(todo.creationDate);

        titleSpan.appendChild(titleNode);
        dateSpan.appendChild(dateNode);

        newLi.appendChild(titleSpan);
        newLi.appendChild(dateSpan);
        
        todoListUl.appendChild(newLi);

    }
}
    
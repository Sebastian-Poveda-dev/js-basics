const todoList = [{name: 'make diner', dueDate: '2026-12-22'},
    {name: 'wash dishes', dueDate: '2026-12-22' }];

renderTodoList();


function renderTodoList() {

    let todoListHTML = '';
    
    todoList.forEach((todoObj, i) => {

        const {name, dueDate} = todoObj;

        const html = `
            <div>${name}</div> 
            <div>${dueDate}</div>
            <button class="delete-todo-button js-delete-todo-button">Delete</button>
            
        `;
    
        todoListHTML += html;
    });
    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    
    document.querySelectorAll('.js-delte-todo-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            
            todoList.splice(index, 1);
             renderTodoList();
            
        });
    });
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addTodo();
});

function addTodo() {
    const inputElem = document.querySelector('.js-name-input');
    const name = inputElem.value;

    const dateInputElem = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElem.value;
    
    todoList.push({
        name,
        dueDate,
    });
    inputElem.value = '';

    renderTodoList();
}
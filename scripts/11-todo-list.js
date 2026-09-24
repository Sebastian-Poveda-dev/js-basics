const todoList = [{name: 'make diner', dueDate: '2026-12-22'},
    {name: 'wash dishes', dueDate: '2026-12-22' }];

renderTodoList();


function renderTodoList() {

    let todoListHTML = '';
    
    for (let i = 0; i < todoList.length; i++) {
        const todoObj = todoList[i];
        const {name, dueDate} = todoObj;

        const html = `
            <div>${name}</div> 
            <div>${dueDate}</div>
            <button class="delete-todo-button" onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            ">Delete</button>
            
        `;
    
        todoListHTML += html;
    }
    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}



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
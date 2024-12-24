let todolisthtml = '';
let todolist = [];

function dolist() {
    const input = document.querySelector('.js-input');
    const inputval = input.value;
    const inputelement = document.querySelector('.js-due-date');
    const dateinputElement = inputelement.value;
    if (inputval) {
        todolist.push({
            name: inputval,
            duedate: dateinputElement
        });
        input.value = ''; // Clear the input field
        inputelement.value = ''; // Clear the date input field
        updateTodoList();
    }
}

function updateTodoList() {
    todolisthtml = '';
    for (let i = 0; i < todolist.length; i++) {
        const todoObject = todolist[i];
        const { name, duedate } = todoObject;
        const html = `<div>${name}</div><div>${duedate}</div><button onclick="deleteTodoItem(${i});" class='delete-btn'>Delete</button>`;
        todolisthtml += html;
    }
    document.querySelector('.js-todolist').innerHTML = todolisthtml;
}

function deleteTodoItem(index) {
    todolist.splice(index, 1);
    updateTodoList();
}

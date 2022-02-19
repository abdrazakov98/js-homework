const form = document.querySelector('#add-todo-form');
const input = document.querySelector('#input-todo');
const btnSubmit = document.querySelector('button');
const todoList = document.querySelector('.todo-list');

form.addEventListener('submit', function(e) {
    e.preventDefault()
})

btnSubmit.addEventListener('click', function() {
    let myTodoList = document.createElement('div')
    myTodoList.classList.add('todo-item')
    todoList.append(myTodoList)
    myTodoList.innerText = input.value
    input.value = ''
    
    myTodoList.addEventListener('click', () => {
        myTodoList.remove()
    })
})  
window.onload = function(){
    loadTodos();

    document.getElementById('new_btn').addEventListener('click', createTodo);
}

function createTodo(){
    const text = prompt('Enter a new TO DO:')

    if (text && text.trim() !== ''){
        addTodo(text.trim());
        saveTodos();
    }
}

function addTodo(text){
    const ftlist = document.getElementById('ft_list')
    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo-item'; 
    todoDiv.textContent = text;

    todoDiv.addEventListener('click', function() {
    if (confirm('Delete this item?')) {
      todoDiv.remove(); 
      saveTodos();     
    }
  });
  
  ftlist.insertBefore(todoDiv, ftlist.firstChild);
}

function saveTodos(){
    const items = document.querySelectorAll('.todo-item');
    const todosArray = [];

    items.forEach(function(item){
        todosArray.push(item.textContent);
    });

    document.cookie = "todos=" + JSON.stringify(todosArray) + "; path=/;";
}

function loadTodos() {
    const cookies = document.cookie.split('; ');
    const todoCookie = cookies.find(row => row.startsWith('todos='));

    if (todoCookie){
        const jsonString = todoCookie.split('=')[1];
        const todosArray = JSON.parse(jsonString);

        todosArray.reverse().forEach(function(text) {
            addTodo(text);
        });
    }
}
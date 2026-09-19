$(document).ready(function() {
    loadTodos();

    $('#new_btn').click(createTodo);
});

function createTodo() {
    const text = prompt('Enter a new TO DO:');

    if (text && text.trim() !== '') {
        addTodo(text.trim());
        saveTodos();
    }
}

function addTodo(text) {
   
    const $todoDiv = $('<div></div>')
        .addClass('todo-item')
        .text(text);

    $todoDiv.click(function() {
        if (confirm('Delete this item?')) {
            $(this).remove(); 
            saveTodos();
        }
    });

    $('#ft_list').prepend($todoDiv);
}

function saveTodos() {
    const todosArray = [];

    $('.todo-item').each(function() {
        todosArray.push($(this).text());
    });

    document.cookie = "todos=" + JSON.stringify(todosArray) + "; path=/;";
}

function loadTodos() {
    const cookies = document.cookie.split('; ');
    const todoCookie = cookies.find(row => row.startsWith('todos='));

    if (todoCookie) {
        const jsonString = todoCookie.split('=')[1];
        const todosArray = JSON.parse(jsonString);

        todosArray.reverse().forEach(function(text) {
            addTodo(text);
        });
    }
}
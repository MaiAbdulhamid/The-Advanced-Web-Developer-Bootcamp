$(document).ready(function () {
  $.getJSON("/api/todos").then(addTodos);

  $('#todoInput').keypress(function(e){
    if(e.which === 13){ //Enter key
      createTodo();
    }
  });
  $('.list').on('click','span' ,function(e){
    e.stopPropagation();
    deleteTodo($(this).parent())
  })
  $('.list').on('click','li' ,function(){
    updateTodo($(this))
  })
  function appendTodo(todo){
    let tasks = $('<li class="task" >' + todo.name + '<span>X</span></li>');
    tasks.data('id', todo._id)
    tasks.data('completed', todo.completed)
    let list = $('.list');
    list.append(tasks);
    if(todo.completed){
      tasks.addClass('done')
    }
  }
  function addTodos(todos) {
    todos.forEach((todo) => {
      appendTodo(todo)
    });
  }
  function createTodo(){
    let newTask = $('#todoInput').val();
    console.log(newTask);
    $.post("/api/todos", {name: newTask})
    .then(function(newTodo){
      $('#todoInput').val('')
      appendTodo(newTodo)
    })
    .catch(function(error){
      console.log(error);
    })
  }

  function deleteTodo(todo){
    let todoId = todo.data('id')
    let url    = '/api/todos/'+ todoId
    $.ajax({
      method: 'DELETE',
      url: url
    }).then(function(res){
      todo.remove();
    }).catch(function(err){
      console.log(err);
    })
  }

  function updateTodo(todo){
    console.log(todo.data('completed'));
    let url         = '/api/todos/' + todo.data('id')
    let isCompleted = !todo.data('completed')
    let data        = {completed: isCompleted}
    $.ajax({
      method: 'PUT',
      url: url,
      data: data
    })
    .then(function(updatedTodo){
      todo.toggleClass('done');
      todo.data('completed', isCompleted)
    })
  }
});

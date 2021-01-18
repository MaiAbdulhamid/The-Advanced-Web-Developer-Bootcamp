const db      = require('../models');

exports.getTodos = function(req, res){
  db.Todo.find()
  .then(function(todos){
      res.json(todos)
  })
  .catch(function(error){
      res.send(error)
  })
}

exports.createTodo = function(req, res){
  db.Todo.create(req.body)
  .then(function(newTodo){
      res.json(newTodo)
  })
  .catch(function(error){
      res.send(error)
  })
}

exports.getTodo = function(req, res){
  db.Todo.findById(req.params.todoId)
  .then(function(todo){
      res.json(todo)
  })
  .catch(function(error){
      res.send(error)
  })
}

exports.updateTodo = function(req, res){
  db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
  .then(function(updatedTodo){
    res.json(updatedTodo)
  })
  .catch(function(error){
    res.send(error)
  })
}

exports.deleteTodo = function(req, res){
  db.Todo.remove({_id: req.params.todoId})
  .then(function(){
    res.json({message: "Todo is Deleted"})
  })
  .catch(function(error){
    res.send(error)
  })
}
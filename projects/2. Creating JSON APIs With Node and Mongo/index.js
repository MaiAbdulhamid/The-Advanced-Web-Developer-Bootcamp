const express = require('express');
const app = express();
const todoRouter = require('./routes/todo')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.get('/', function(req, res) {
  res.send("Hello World!")
})
app.use('/api/todos', todoRouter) //api prefix
app.listen(3000, function() {
  console.log('App is Running on port 3000');
})

const express = require('express');
const app = express();
const todoRouter = require('./routes/todo')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
//Serve static files
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/views'))

app.get('/', function(req, res) {
  res.sendFile('index.html')
})
app.use('/api/todos', todoRouter) //api prefix
app.listen(3000, function() {
  console.log('App is Running on port 3000');
})

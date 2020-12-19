const mongoose = require('mongoose')
mongoose.set('debug', true)
mongoose.connect('mongodb://localhost:27017/tododb', {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.Promise = Promise;

module.exports.Todo = require('./todo')
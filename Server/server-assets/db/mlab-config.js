var mongoose = require('mongoose')
var connectionString = 'mongodb://admin:2001053536admin@ds012889.mlab.com:12889/interim-chief'
var connection = mongoose.connection


mongoose.connect(connectionString, { useMongoClient: true })

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('Connected to Database')
})
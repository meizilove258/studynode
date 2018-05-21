var express = require('express')
var http = require('http')
var app = express()

var testRouter = require('./routes/test')

app.use('/test', testRouter)
http.createServer(app).listen(3000)
console.log('3000....')
'use strict'

// Require package
var express = require('express')
var app = require('express')()
var server = require('http').Server(app)

// Default settings
var config = require('./config.json')
var port = config.port || 3000

// app.use for public folder
app.use('/', express.static(__dirname + '/public'))

// Routers
app.get('/', function(req, res){
	console.log("[Connect] Get request to '/'")
	res.sendFile(__dirname + '/pages/index.html')
})

// Listen on port
server.listen(port, function(){
	console.log("Server is running at port", port)
})

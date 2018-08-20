'use strict'

// Require package
var express = require('express')
var app = require('express')()
var server = require('http').Server(app)
var bodyParser = require('body-parser')
var shell = require('shelljs');

// Default settings
var config = require('./config.json')
var port = config.port || 3000

// app.use for public folder
app.use('/', express.static(__dirname + '/public'))

// Body parser
app.use(bodyParser.urlencoded({ extended: true }))

// Routers
app.get('/', function(req, res){
	console.log("[Connect] GET request to '/'")
	res.sendFile(__dirname + '/pages/index.html')
})
app.get('/page', function(req, res){
	console.log("[Connect] GET request to '/page'")
	res.sendFile(__dirname + '/pages/page.html')
})
app.get('/restart', function(req, res){
	console.log("[Connect] GET request to '/restart'")
	res.sendFile(__dirname + '/pages/restart.html')
})
app.post('/restart', function(req, res){
	console.log("[Connect] POST request to '/restart'")
	if(req.body.password == config.password){
		shell.exec('./pull.sh')
		res.redirect(303, '/')
	}
	else{
		res.send('meow')
	}
})


// Listen on port
server.listen(port, function(){
	console.log("Server is running at port", port)
})

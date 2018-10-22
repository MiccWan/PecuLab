'use strict'

// Require package
var express 	= require('express')
var app 		= require('express')()
var server 		= require('http').Server(app)
var bodyParser 	= require('body-parser')
var shell 		= require('shelljs');

// Default settings
var config 	= require('./config.json')
var port 	= config.port || 3000

// app.use for public folder
app.use('/', express.static(__dirname + '/public'))

// Body parser
app.use(bodyParser.urlencoded({ extended: true }))

// GET router
var router = require('./routers');
app.use('/', router);

// POST routers
app.post('/restart', function(req, res){
	console.log("[Connect] POST request to '/restart'")
	if (req.body.password == config.password){
		shell.exec('./pull.sh')
		res.redirect(303, '/')
	}
	else res.send('wrong password')
})
app.post('/contact', function(req, res){
	console.log("[Connect] POST request to '/contact'")
	if (config.DEBUG) console.log(`[Debug] Req.body = ${req.body}`)
	res.send("We have received your message.")
})

// Listen on port
server.listen(port, function(){
	console.log("[Setup] Server is running at port", port)
})
var express = require('express');
var router = express.Router();

// Routers list
let route_list = {
	"/" : "/pages/index.html",
	"/forty": "/pages/forty_ele.html",
	"/hyperspace": "/pages/hyperspace_ele.html",
	"/teams": "/pages/teams.html",
	"/team1": "/pages/team1.html",
	"/team2": "/pages/team2.html",
	"/team3": "/pages/team3.html",
	"/restart": "/pages/restart.html",
	"/forty": "/pages/forty_ele.html",
	"/pictures": "/pages/pictures.html"
}

for (let key in route_list){
	let val = route_list[key]
	router.get(key, function(req, res){
		console.log(`[Connect] GET request to '${key}'`)
		res.sendFile(__dirname + val);
	})
}

module.exports = router;
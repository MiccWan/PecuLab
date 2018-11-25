var express = require('express');
var router = express.Router();

// Render list
let render_list = {
	"/" : "index",
	"/teams": "teams",
	"/team1": "team1",
	"/team2": "team2",
	"/team3": "team3",
	"/elements": "elements",
	"/restart": "restart",
	"/pictures": "pictures"
}

for (let key in render_list){
	let val = render_list[key]
	router.get(key, function(req, res){
		console.log(`[Connect] GET request to '${key}'`)
		res.render(val);
	})
}

module.exports = router;
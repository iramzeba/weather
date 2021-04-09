var unirest = require("unirest");

var req = unirest("GET", "https://freesms8.p.rapidapi.com/index.php");

req.query({
	"uid": "iram",
	"pwd": "iram",
	"phone": "7204174519",
	"msg": "welcome to voyzon"
});

req.headers({
	"x-rapidapi-host": "freesms8.p.rapidapi.com",
	"x-rapidapi-key": "607be30e02msh960dea9033f416fp16e2d8jsn5f9225ef88e7"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
let request = require('request');
const argv = require('yargs').argv;
let apiKey  = 'a5b33fdc8f6ce02dd5cb0daa6b4dc008';
let city =  argv.c|| 'Bengaluru';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url,function (error, res, body ) {
	// body...

	 if(error){
    console.log('error:', error);
  } else {

  	let weather = JSON.parse(body);
  	let message = `its ${weather.main.temp} degrees in ${weather.name}, `;
    console.log('body:', message);
  }
});
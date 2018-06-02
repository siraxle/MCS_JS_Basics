console.log('You are at ' + window.location);

const APIkey = '55ab212df730bb2e391ea733935b71bb';

let xhr = new XMLHttpRequest();

document.getElementById("getTemp").onclick = function(){
	let city = document.getElementById("city").value;
	let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid='+APIkey;
	xhr.open('GET', url, false);
	xhr.send();
	if (xhr.status != 200) {
		console.log(xhr.status + ' '+ xhr.statusText);
	}else{
		let data = JSON.parse(xhr.responseText);
		console.log(data);
		document.getElementsByClassName("result")[0].innerHTML = "температура: " 
		+ parseInt(data.main.temp - 273) + " скорость ветра:" + data.wind.speed;
	}
};
window.onload = function(){
	console.log('You are at ' + window.location);

	class Person {
		constructor (name){
			this.name = name;
			this.happiness = 0;
		}
		hasCat(){
			this.happiness += 1;
		}
		hasRest(){
			this.happiness += 1;
		}
		hasMoney(){
			this.happiness += 1;
		} 
		isSunny(){
			const APIkey = '55ab212df730bb2e391ea733935b71bb';
			const city = 'Москва';
			const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid='+APIkey;

			let xhr = new XMLHttpRequest();

			xhr.open('GET', url, false);

			xhr.send();

			if (xhr.status != 200) {
				console.log(xhr.status + ' '+ xhr.statusText);
			}else{
				let data = JSON.parse(xhr.responseText);
				console.log(data);
				var res = (data.main.temp - 273);
			}
			if (res > 15) {
				this.happiness += 1;
			}
			//console.log(parseInt(res));
		} 
	}

	const form = document.forms[0];
	form.onsubmit = function (e) {
		e.preventDefault();
		let name = document.getElementById('name').value;
		let catY = document.getElementById('catY').checked;
		let catN = document.getElementById('catN').checked;
		let restY = document.getElementById('restY').checked;
		let restN = document.getElementById('restN').checked;
		let moneyY = document.getElementById('moneyY').checked;
		let moneyN = document.getElementById('moneyN').checked;
		const user = new Person(name);
		if (catY == true ) {
			user.hasCat();	
		};
		if (restY == true) {
			user.hasRest();
		};
		if (moneyY == true) {
			user.hasMoney();
		};
		user.isSunny();
		let personName = document.getElementsByClassName("personName")[0];
		let icon = document.getElementsByClassName("icon")[0];
		console.log(user.name);
		personName.innerHTML = user.name + ":";
		if (user.happiness == 4) {
			icon.innerHTML = '<span>&#9786;</span>';
		};
		if (user.happiness == 3 || user.happiness == 2) {
			icon.innerHTML = '<span>&#128528;</span>';
		};
		if (user.happiness == 2) {
			icon.innerHTML = '<span>&#128530;</span>';
		};    
		console.log(user.happiness);
	}
}


























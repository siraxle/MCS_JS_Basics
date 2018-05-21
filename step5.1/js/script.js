console.log('You are at ' + window.location);

function change(i){
	console.log(Math.abs(Math.pow(i,(Math.round(Math.random()*(9-1)+1)))));
}

let n = prompt('Введите число:');
let result = change(n);
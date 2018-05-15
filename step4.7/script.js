function haveEnough (allMoney, apples, breads, oneApple, oneBread) {
	let bool = (allMoney >= (apples * oneApple) + (breads * oneBread));
	if (bool == true) {
		return 'Вам хватает денег на покупки';
	}else return 'Вам не хватает денег';
}

let allMoney = parseFloat(prompt("Сколько у вас с собой денег?"));
let apples = parseFloat(prompt("Сколко вы хотите купить яблок в штуках?"));
let breads = parseFloat(prompt("Сколко вы хотите купить хлеба в штуках?"));
let oneApple = parseFloat(prompt("Сколко стоит одно яблоко?"));
let oneBread = parseFloat(prompt("Сколко стоит один хлеб?"));

document.write(haveEnough(allMoney, apples, breads, oneApple, oneBread));
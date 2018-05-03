let allMoney = parseFloat(prompt("Сколько у вас с собой денег?"));
let apples = parseFloat(prompt("Сколко вы купили яблок в штуках?"));
let breads = parseFloat(prompt("Сколко вы купили хлеба в штуках?"));
let oneApple = parseFloat(prompt("Сколко стоит одно яблоко?"));
let oneBread = parseFloat(prompt("Сколко стоит один хлеб?"));
let bool = (allMoney >= (apples * oneApple) + (breads * oneBread));
document.body.innerHTML = '<h1>'+bool+'</h1>';
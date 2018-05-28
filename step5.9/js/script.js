console.log('You are at ' + window.location);

let names = [
	[
		['куры', 'гуси', 'павлины'],
		['сокол', 'орел', 'соловей']
	],
	[
		['собака', 'кошка'],
		['обезьяна', 'рысь']
	]
];

for (var i = 0; i < names.length; i++) {
	for (var j = 0; j < names[i].length; j++) {
		for (var k = 0; k < names[i][j].length; k++) {
			console.log(names[i][j][k]);
		};
	};
};
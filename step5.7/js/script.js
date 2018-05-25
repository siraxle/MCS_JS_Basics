console.log('You are at ' + window.location);

let i = 1;
while (i != 100000){
	if (i % 6 == 0) {
		document.write(i + '<br>');
	};
	i++;
}

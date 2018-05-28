console.log('You are at ' + window.location);

let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
]

let colors = ['red','yellow','green'];

for (var i = 0; i < crypto.length; i++) {
	document.body.innerHTML += '<h1>' + crypto[i].name + '</h1>'+
						 	   '<p>' + crypto[i].price + '</p>'+
						 	   '<div style="background-color: '+ colors[i] + '; width: '+crypto[i].price+'px; height: 30px"></div>';
};
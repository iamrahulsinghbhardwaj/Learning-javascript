let convertfaren = function(faren){
	let celcius;
	if(faren>0){
		 celcius=(faren-32)*5/9;
	}
	return celcius;
}

let x=convertfaren(50);
console.log(x);
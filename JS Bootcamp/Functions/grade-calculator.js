let checkresult=function(marks){
	if(marks>=90 && marks<=100){
		return 'A';
	}
	else if(marks>=80 && marks<=89){
		return 'B';
	}
	else if(marks>=79 && marks<=70){
		return 'C';
	}
	else if(marks>=60 && marks<=69){
		return 'D'
	}
	else{
		return 'F';
	}
}

let result=checkresult(5);
console.log(result);
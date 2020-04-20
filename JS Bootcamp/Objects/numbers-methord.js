let x=103.911;

console.log(x.toFixed(1)); //upto how many decimals
console.log(Math.round(x));
console.log(Math.floor(x));
console.log(Math.ceil(x)); //always force to round

let makeguess=function(guess){
let min=1;
let max=5;
let randomnum=Math.floor(Math.random()*(max-min+1))+min;
return guess===randomnum;
}

console.log(makeguess(1));
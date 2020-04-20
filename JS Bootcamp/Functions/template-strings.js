let name='rahul';
let age=19;
console.log(`My name is ${name} and i am ${age} years old`);

let geTip=function(total,tipPercent =.2){
 let percent=tipPercent*100;
 let tip=total*tipPercent;
 return `A ${tipPercent*100}% tip on ${total} would be $${tip}`;
}
let tip=geTip(60);
console.log(tip);
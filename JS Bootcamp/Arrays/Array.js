let a=['rahul','singh','bhardwaj'];
/*
console.log(a.pop());
a.push('ok');

console.log(a.shift());
console.log(a.unshift('hell yeah!!')); // to add from beginning
 */

a.splice(0,1); //start from index 0 and remove two elements including at index 0;
a.splice(0,0,'rahul is replced by raaahuul');
console.log(a.splice(2,1));
a.push('bhaa');
console.log(a.length +' '+a);
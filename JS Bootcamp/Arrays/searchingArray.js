let node=['rahul','singh','bhardwaj']; 
console.log(node.indexOf('singh')); // it will return index
	
let node1=[{},{
	title:'My next trip',
	body:'I would like to go to Sweden'
},{
title:'Habbits to work on',
body:'Exercise,Eating a bit better'	
},{
	title:'office midifiaction',
	body:'Get a new seat'
}];

console.log(node1);
console.log(node1.indexOf({})); //return -1 bcq we cant use index of in arrays of obj
let obj={};
let obj1=obj;
console.log(obj===obj1); //we cant compare two different object until or unless both dont share same obj
const index=node1.findIndex(function(node,index){
	console.log(node); // print util the item in not found;
	return node.title==='My next trip';
});
console.log(index);
let node=[{
	title:'My next trip',
	body:'I would like to go to Sweden'
},{
title:'Habbits to work on',
body:'Exercise,Eating a bit better'	
},{
	title:'office midifiaction',
	body:'Get a new seat'
}];
/*
const filter=node.filter(function(node,index){
	const istitlematch=node.title.toLowerCase().includes('my'); // we use filter if we partial need to search something
	const isbodymatch=node.title.toLowerCase().includes('g');
	return istitlematch || isbodymatch;
});
*/
const filternode=function(node,query){
	const titlematch=node.title.toLowerCase().includes(query.toLowerCase());
	const bodymatch=node.title.toLowerCase().includes(query.toLowerCase());
	return titlematch||bodymatch;
}
//console.log(filter);
console.log(filternode(node,'my'));

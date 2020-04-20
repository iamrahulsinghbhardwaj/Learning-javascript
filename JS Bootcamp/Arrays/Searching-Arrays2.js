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
const findNote=function(node1,nodetitle){
	const index=node1.findIndex(function(node,index){
		return node.body===nodetitle; 
	});
	return node1[index];
}
 const node=findNote(node1,'Get a new seat');
 console.log(node);
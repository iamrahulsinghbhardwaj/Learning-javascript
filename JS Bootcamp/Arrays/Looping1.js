const node=['Note 1','Note 2','Note 3'];

node.forEach(function(item,index){
	const num=index+1;
	console.log(`${num}, ${item}`);
});
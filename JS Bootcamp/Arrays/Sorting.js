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

const todos=[{
			text:'Order cat food',
			completed: true
		},
		{
			text:'Clean Kitchen',
			completed: false
		},
		{
			text:'Buy food',
			completed: true
		},
		{
			text:'Do work',
			completed: false
		},
		{
			text:'Exercise',
			completed: true
		},
]
const sorttodos=function(todos){
	todos.sort(function(a,b){
		if(!a.completed && b.completed){
			return -1;
		}
		else if(a.completed && !b.completed){
			return 1;
		}
		else{
			return 0;
		}
	})
}
const sortnode=function(node){
		node.sort(function(a,b){
			if(a.title.toLowerCase()<b.title.toLowerCase()){
				return -1;
			}
			else if(b.title.toLowerCase()<a.title.toLowerCase()){
				return 1;
			}
			else{
				return 0;
			}
		});
}
sorttodos(todos);
sortnode(node);
console.log(node);
console.log(todos);
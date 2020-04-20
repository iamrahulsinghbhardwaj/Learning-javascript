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
const deleteTodo=function(todo,todotext){
	const index=todo.findIndex(function(todo){
		return todo.text===todotext;
	})
	if(index>-1){
		todo.splice(index,1);
	}
}
deleteTodo(todos,'Clean Kitchen');
console.log(todos);
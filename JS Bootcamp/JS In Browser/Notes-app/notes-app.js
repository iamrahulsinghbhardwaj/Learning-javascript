const notes=[{
	 title:'my next trip',
	 body:'I would like to go to spain'
	},{
	  title:'Habbits to work on',
	  body:'Exercise. Eating a bit better.'
	},{
	  title:'office modification',
	  body:'Get a new seat'
	}];
//const p=document.querySelector('p');
//p.remove(); //it will remove on paragraph only
/*
const ps=document.querySelectorAll('p');

ps.forEach(function(ps){
	if(ps.textContent.includes('the')){
		ps.remove();
	}
	//p.remove(); 
	//p.textContent='*****';
}) //TO remove all paragraph

const newp=document.createElement('p');
newp.textContent="This is a new text";
document.querySelector('body').appendChild(newp);

document.querySelector('button').addEventListener('click',function(){
console.log('hello');
});

document.querySelector('#create').addEventListener('click',function(e){
	e.target.textContent='The button was clicked';
});

document.querySelector('#remove-all').addEventListener('click',function(){
	document.querySelectorAll('.note').forEach(function(note){
		note.remove();
	});
});'
*/

const filters={
	searchText:' '
}

const renderNotes=function(notes,filters){
	const filternotes=notes.filter(function(note){
		return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
	});
	document.querySelector('#notes').innerHTML=" ";
	filternotes.forEach(function(note){
		const el=document.createElement('p');
		el.textContent=note.title;
		document.querySelector('#notes').appendChild(el);
	})
}

document.querySelector("#search-text").addEventListener('input',function(e){
	filters.searchText=e.target.value;
	renderNotes(notes,filters);
});

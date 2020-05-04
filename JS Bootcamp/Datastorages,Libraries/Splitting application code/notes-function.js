const getSavedNotes=function(){
	const notesJSON=localStorage.getItem('notes');
	if(notesJSON!=null){
		return JSON.parse(notesJSON);
	}else{
		return [];	
	}
}

//DOM methord

const generateNoteDom=function(note){
	const noteEl=document.createElement('p');

	if(note.title.length>0){
		noteEl.textContent=note.title;
	}else{
		noteEl.textContent='Unnamed Note';
	}
	return noteEl;
}

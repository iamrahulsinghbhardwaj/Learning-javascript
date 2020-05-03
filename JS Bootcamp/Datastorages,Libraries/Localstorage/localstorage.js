
//const user={
    //name:'Andrew',
  //  age:27
//}
//const userJSON=JSON.stringify(user); //to conver into string
//console.log(userJSON);

//localStorage.setItem('user',userJSON);

//const userJSON=localStorage.getItem('user');
//const user=JSON.parse(userJSON); //convet back to object
//console.log(`${user.name} is ${user.age}`);

//localStorage.setItem('location','india');
//console.log(localStorage.getItem('location'));
//localStorage.removeItem('location');
//localStorage.clear();

let notes=[];

const filters={
    searchText: ''
}

const notesJson=localStorage.getItem('notes');
if(notesJson!=null){
    notes=JSON.parse(notesJson);
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p');
        if(note.title.length>0){
            noteEl=note.title;
        }else{
            noteEl.textContent='Unnamed note';
        }
        document.querySelector('#notes').appendChild(noteEl);
    })
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function (e) {
   notes.push({
    title:'',
    body:''
   });
   localStorage.setItem('notes',JSON.stringify(notes));
   renderNotes(notes,filters);
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters);    
})

document.querySelector('#filter-by').addEventListener('change',function(e){
    console.log(e.target.value);
});

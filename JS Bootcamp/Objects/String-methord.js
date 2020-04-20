let name='Rahul singh';

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());

let password='abc123asdf45';
console.log(password.includes('password'));

let name1='  Rahul singh  ';
console.log(name1.trim());

let isvalidpassword=function(name){
	
		return name.length >8 && name.includes('password');
}
console.log(isvalidpassword('how are you password'));
console.log(isvalidpassword('how are you passwo'));
console.log(isvalidpassword('paord'));



const person=function(firstname,lastname,age){
this.firstname=firstname;
this.lastname=lastname;
this.age=age;
}
const me=new person('Rahul','singh',19);
console.log(me);

const person2=new person('harshit','gupta',19);
console.log(person2);
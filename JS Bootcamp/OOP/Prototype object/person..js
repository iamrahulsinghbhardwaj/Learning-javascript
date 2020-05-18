const person=function(firstname,lastname,age,likes=[]){
this.firstname=firstname;
this.lastname=lastname;
this.age=age;
this.likes=likes;
}

person.prototype.getBio=function(){
  let bio= `${this.firstname} is ${this.age}`
    this.likes.forEach((like)=>{
        bio+=` ${this.firstname} likes ${like}`
    })
    return bio
}
person.prototype.setName=function(fullName){
    const names=fullName.split(' ');
    this.firstname=names[0];
    this.lastname=names[1];
}

const me=new person('Rahul','singh',19,['Teaching','Biking']);
me.setName('Rahul singh');
console.log(me.getBio());

const person2=new person('harshit','gupta',19);
console.log(person2.getBio());
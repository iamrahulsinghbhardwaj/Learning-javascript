class Person{
    constructor(firstname,lastname,age,likes=[]){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.likes=likes;
    }
    getBio(){
        let bio= `${this.firstname} is ${this.age}`
        this.likes.forEach((like)=>{
            bio+=` ${this.firstname} likes ${like}`
        })
        return bio
    }
    setName(fullName){
        const names=fullName.split(' ');
        this.firstname=names[0];
        this.lastname=names[1];
    }
}


const me=new Person('Rahul','singh',19,['Teaching','Biking']);
me.setName('Rahul singh');
console.log(me.getBio());

const person2=new Person('harshit','gupta',19);
console.log(person2.getBio());
const square=(num)=> num*num;
console.log(square(5));

const people=[{
    name:'Rahul',
    age:19
},{
    name:'Divyam',
    age:25
},{
    name:'Vaibhav',
    age:30
}]

const below30=people.filter((people)=> people.age<30);
const person=people.find((people)=> people.age==19);
console.log(below30);
console.log(person);
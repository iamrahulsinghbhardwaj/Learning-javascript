const createcounter=()=>{
let count=0
return{
    increment(){
        count++
    },
    decrement(){
        count--
    },
    get(){
        return count
    }
 }
}

const counter=createcounter()

counter.increment()
counter.decrement()
counter.increment()
console.log(counter.get())

const add=(a,b)=>a+b

 const createadder=(a)=>{
     return (b)=>{
         return a+b
     }
 }

 const add10=createadder(10)
 console.log(add10(-2))

 const createTipper=(baseTip)=>{
     return(amount)=>{
         return baseTip*amount
     }
 }

 const tip20=createTipper(.2)
 const tip30=createTipper(.3)
 console.log(tip20(100))
 console.log(tip20(100))


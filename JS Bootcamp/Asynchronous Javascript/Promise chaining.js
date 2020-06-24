const getdatacallback=(callback)=>{
    setTimeout(()=>{
       if(typeof num==='number'){
           callback(undefined,num*2)
       }else{
           callback('Number must be provided')
       }
    },2000)
}

getdatacallback((err,data)=>{
    if(err){
        console.log(err)
    }else{
        getdatacallback(data,(err,data)=>{
            if(err){
                console.log('err')
            }else{
                console.log(data)
            }
        })
    }
})

const getdataPromise=(num)=> new Promise((resolve,reject)=>{
    setTimeout(()=>{
       typeof num==='number'? resolve(num*2):reject('This is promise error')
    },2000)
})

getdataPromise(2).then((data)=>{
    getdataPromise(data).then((data)=>{
        console.log(`Promise data:${data}`)
    },(err)=>{
        console.log(err)
    })
},(err)=>{
    console.log(err)
})

 getdataPromise('10').then((data)=>{
     return getdataPromise(data)
 }).then((data)=>{
     return getdataPromise(data)
 }).then((data)=>{
     console.log(data)
 }).catch((err)=>{
    console.log(err)
 })

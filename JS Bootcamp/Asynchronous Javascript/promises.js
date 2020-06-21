const getdatacallback=(callback)=>{
    setTimeout(()=>{
        callback('This is my callback error',undefined)
    },2000)
}

getdatacallback((err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log('data')
    }
})

const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('This is promise error')
    },2000)
})

myPromise.then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})
const getip=(amount)=>{
    if(typeof amount==='number'){
        return amount*0.25;
    }else{
        throw Error('Argument must be a number');
    }
    
}
try{
    const result=getip(10);
     console.log(result);
}catch(e){
    console.log('Error');
}
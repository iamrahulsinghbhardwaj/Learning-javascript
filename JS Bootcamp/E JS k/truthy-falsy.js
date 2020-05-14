//falsy values false,0,empty string,null,undefined
const products=[{name:'hello'}];
const product=products[0];

if(product){
    console.log('found')
}else{
    console.log('Not found');
}
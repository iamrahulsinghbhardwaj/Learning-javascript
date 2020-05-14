const age=21;

let message;

message=age>18?"you can vote":"you cant vote";
console.log(message);

const showpage=()=>{
    return 'yes you can vote';
}
const error=()=>{
    return 'No you cant';
}

console.log(age>18?showpage():error());
let myaccount={
	name:'Rahul',
	expenses:0,
	income:0
}
let addexpense= function(account,expense){
	account.expenses=account.expenses+expense;
}
let addincome=function(account,income){
 account.income=account.income+income;
}
let resetAccount=function(account){
account.expenses=0;
account.income=0;
}
let getAccountsummary=function(account){
	let balance=account.income-account.expenses;
   return `Name is ${account.name} Final money ${balance}`;
}
addincome(myaccount,2000);
addexpense(myaccount,2.50);
addexpense(myaccount,160);
console.log(getAccountsummary(myaccount));
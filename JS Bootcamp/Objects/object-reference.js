let obj={
	name:'rahul',
	expenses:0,
	income:0
}

let addExpense=function(account,amount){
	account.expenses=account.expenses+amount;
	console.log(account);
}
addExpense(obj,20);
console.log(obj);
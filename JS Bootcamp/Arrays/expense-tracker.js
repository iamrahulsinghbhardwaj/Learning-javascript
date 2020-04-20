
let account={
 name:'Rahul',
 expenses:[],
 Income:[],
 addExpense:function(description,amount){
 	this.expenses.push({
 			description: description,
 	 		amount: amount
 });
 },

 addIncome:function(description,amount){
 	this.Income.push({
 		description: description,
 		amount:amount
 	})
 },
 getaccountSummary:function(){
	let totalexpenses=0;
	let totalincome=0;
	let balance=0;
	this.Income.forEach(function(expense){
			totalincome=totalincome+expense.amount;
	});

	this.expenses.forEach(function(expense){
		totalexpenses=totalexpenses+expense.amount;
	});

	balance=totalincome-totalexpenses;
	return `${this.name} has total balance of ${balance} and his total is ${totalincome}`;
 }
}

account.addExpense('Rent',900);
account.addExpense('Coffee',2);
account.addIncome('job',1000);
console.log(account.getaccountSummary());

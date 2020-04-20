let obj={
	title: '2000',
	author: 'Rahul',
	pagecount: 19
}

let obj1={
	title: '2001',
	author: 'singh',
	pagecount: 20
}

let check=function(ob){
	return {
		summary:`${ob.title} this is title`,
		pagecountsummary:`${ob.pagecount} pages`
	}
}
let booksummary=check(obj);
let otherbooksummary=check(obj1);
console.log(booksummary.summary);
console.log(otherbooksummary.pagecountsummary);
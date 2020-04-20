let restraunt={
	name:'Rahul',
	guestCapacity:75,
	guestcount:0,
	checkAvability: function(partysize){
		let seatsleft=this.guestCapacity-this.guestcount;
		return partysize<=seatsleft;
	},
	seatParty:function(partysize){
		this.guestcount+this.guestcount+partysize;
	},
	removeParty:function(partysize){
		this.guestcount=this.guestcount-partysize;
	}
}
restraunt.seatParty(72);
console.log(restraunt.checkAvability(4));
restraunt.removeParty(5);
console.log(restraunt.checkAvability(4));
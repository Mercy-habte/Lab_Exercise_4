var bank_accounts = {
	My: {
		fullname: 'Full Name',
		balance: 1345,
		
	},
	My2: {
		fullname: 'Full Name',
		balance: 0,
	
	}
};

My = bank_accounts.My
function balance (){
	alert("Your Balance is " + My.balance)
}

function deposit( val) {
	My.balance +=val
	}


function withdraw(val ) {
	if(My.balance - val > 50) {
		alert("Your Deposit Is too Low");
	}
	else {
		My.balance -=val;
		alert("Current Balance is"+ My.balance)

	}

}
function transfer(val, to="My2") {
	if(My.balance - val > 50) {
	("Your Deposit Is too Low");
	}
	else {
	My.balance -=val;
	bank[to].balance += val;
	alert("Current Balance is"+ My.balance)
	}
}

( ()=> {
	alert("WELCOME");
	var input = prompt("What do you want to do?. \n 1.Deposite. \n 2.Check Balance \n 3. Withdraw. \n 4. Transfer ");

	switch(input) {
	case '1':
		var d = prompt('Enter The amount');
		deposit(d);
		alert("You have deposited"+ " " + d + "birr")
		break;
	case '2':
		balance();
		break;
	case '3':
		var w = prompt('Enter The amount');
		withdraw(w)
		alert("You have withdrawn"+ " " + w + "birr")
	case '4':
		var w = prompt('Enter The amount');
		var t = prompt('Enter the person to transfer');
		transfer(w,t);
		alert("You have transfered "+ " " + w + "birr " + "to "+ t)
	default:
		alert("Error!"); 
	}
})();
	

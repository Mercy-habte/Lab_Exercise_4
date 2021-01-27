var bank_accounts = {
	Eden: {
		fullname: 'Eden Tesfaye',
		balance: 100,
		
	},
	Fitsum: {
		fullname: 'Fitsum Alemu',
		balance: 0,
	
	}
};

Eden = bank_accounts.Eden
function balance (){
	alert("Your Balance is " + Eden.balance)
}

function deposit( val) {
	Eden.balance +=val
	}


function withdraw(val ) {
	if(Eden.balance - val > 50) {
		alert("Your Deposit Is too Low");
	}
	else {
		Eden.balance -=val;
		alert("Current Balance is"+ Eden.balance)

	}

}


function transfer(val, to="Fitsum") {
	if(Eden.balance - val > 50) {
	("Your Deposit Is too Low");
	}
	else {
	Eden.balance -=val;
	bank[to].balance += val;
	alert("Current Balance is"+ Eden.balance)
	}
}

( ()=> {
	alert("Welcome");
	var input = prompt("What do you want to do?.To Deposit enter 1.To check balance enter 2 to withdraw enter 3. to transfer enter 4");

	switch(input) {
	case '1':
		var d = prompt('Enter The amount');
		deposit(d);
	
		break;
	case '2':
		balance();
		break;
	case '3':
		var w = prompt('Enter The amount');
		withdraw(w)
	case '4':
		var w = prompt('Enter The amount');
		var t = prompt('Enter the person to transfer');
		transfer(w,t);
	default:
		alert("Error!"); 
	}
})();
	

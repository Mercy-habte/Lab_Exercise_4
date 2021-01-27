var firstName;
var lastName;
var age;
var job;

let tempAge;
let isElligibleToVote;

firstName = prompt("Enter Your First Name");
lastName = prompt("Enter your Last Name");
job = prompt("What is your Profession ?");
age = prompt("Enter your Age"); 

console.log("Here is your Profile ")
console.log("Full Name: " + firstName + ""+lastName);
console.log("Profession: " + job);
console.log("Age: "+ age + "" + "years old");

if(tempAge>= 18){
    isElligibleToVote= true;
}
else{
    isElligibleToVote = false;
}
console.log("is Elligible to Vote: " + isElligibleToVote);
// //Activity 1
// let age = 25;
// let country = "UK";
// if(age>17 && country=="UK"){
//     console.log("Yes I can serve you");
// }
// else{
//     console.log("you aren't old enough");
// }

// //Activity 2
// let topping = "pineapple";
// switch(topping){
//     case "peppers":
//     case "jalepenos":
//         console.log("These are important ingredients for my pizza.");
//         break;
//     case "tomatoes":
//         console.log(`I don't mind having ${topping} on my pizza`);
//         break;
//     default:
//         console.log(`${topping} should not be on my pizza`);
// }

// //Activity 3
// let password = "variable";
// let len = password.length;
// if(len<8){
//     console.log('password is too short');
// }
// else{
//     console.log(`The password is ${password}`);
// }

// //Activity 4
// let num = 22;
// if(num%3 == 0 || num%5 == 0){
//     console.log("Divisible by 3 or 5");
// }
// else{
//     console.log("Not divisible by 3 or 5");
// }

// //Activity 5
// let num = 15;
// if(num%3 == 0 ){
//     console.log("fizz");
// }
// else if(num%5==0) {
//     console.log("buzz");    
// } 
// else {
//         console.log(`Entered no is ${num}`);
// }

// // Activity 6
// let rem, temp, final = 0;
// let number = 12231;
// temp = number;
// while(number>0){
//     rem = number%10;
// 	number = parseInt(number/10);
// 	final = (final*10)+rem;
// }
// if(final==temp){
//     console.log("The inputed number is Palindrome");
// }
// else{
// 	console.log("The inputted number is not palindrome");
// }

// // Activity 7
// let time = 10;
// let placeOfWork = 'home';
// let townOfHome = 'manc';
// if(time<=7){
// 	console.log(`I'm at home`);
// }  
// else if (time>7 && time<9) {
// 	console.log(`I'm commuting`);
// }
// else{
// 	console.log(`I'm at work`)
// }

// Activity-8
let string = "rfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwsh";
let len= string.length;
console.log(`length of given string is ${len}`);
for(i=len; i>=0; i--){
	if(string[i-1]=="a"||string[i-1]=="e"||string[i-1]=="i"||string[i-1]=="o"||string[i-1]=="u"){
		console.log(`Index of last vowel in string is ${i-1}`);
		break;
	}
}

//Second method
//let string = "rfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwsh";
let a = string.lastIndexOf('a');
let e = string.lastIndexOf('e');
let j = string.lastIndexOf('i');
let o = string.lastIndexOf('o');
let u = string.lastIndexOf('u');
console.log(`Index of last vowel in string is ${Math.max(a,e,j,o,u)}`)



// //Activity 9 
// let word  ="strings";
// if(word.charAt(0)==word.charAt((word.length)-1)){
// 	console.log("true");
// }
// else{
// 	console.log("false");
// }

// //Activity 10
// let n1 = 2;
// let n2 = 3;
// if((n1+n2)%2==0){
// 	console.log("sum is even");
// }
// else{
// 	console.log(n1*n2);
// }

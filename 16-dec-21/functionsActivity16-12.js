// //Activity-1
// const factorial = (n) => {
//     if(n==0||n==1){
//         return 1;
//     } else{
//         return (n*factorial(n-1));
//     }
// }
// console.log(factorial(3));

// //Activity-2
// let orderCount = 0;
// const takeOrder = (topping1, topping2) => {
//     console.log(`pizze with ${topping1}, ${topping2}`);
//     orderCount++;
// }
// takeOrder("pineapple", "tomato");

//Activity-3
let userPin = 1234;
let userBalance = 1500;
function atm(pin, amount){
    if(pin==userPin && userBalance>=amount){
        console.log(`Dispensing ${amount}£`);
    }
    else if(pin==userPin && userBalance<amount){
        console.log("Insufficient funds");
    }
    else if(pin!=userPin && userBalance>amount){
        console.log("Incorrect Pin. Please try again");
    }
    else{
        console.log("Please try later")
    }
}
atm(1224, 200);
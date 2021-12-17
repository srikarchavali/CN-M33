// let coffeeOrder = ["alex-cortado", "ben-cortado", "chris-whatever is new"];
// // console.log(coffeeOrder);
// // console.log(coffeeOrder[2]);
// // coffeeOrder[1]= "Ann-vanilla latte";
// // console.log(coffeeOrder);
// // console.log(`The length of given array is ${coffeeOrder.length}`);
// // coffeeOrder.push("Donna-Espresso");
// // console.log(coffeeOrder);
// coffeeOrder.pop();
// console.log(coffeeOrder);

// // Activity-1
// let songs = ["shape of you", "cheap thrills", "shake it off"];
// console.log(songs);
// songs.push("sorry","lean on");
// console.log(songs);
// songs.pop();
// console.log(songs);

// //Activity-2
// let map1 = new Map();
// map1.set('a',1);
// map1.set('b',2);
// map1.set('c',3);
// console.log(map1);
// console.log(map1.size);
// map1.delete('c');
// console.log(map1);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 1, "Lemon", "Kiwi");
// console.log(fruits);
// const citrus = fruits.slice(1, 3);
// console.log(citrus);
// let favDrink=['coffee','tea','coke'];
// // console.log(favDrink[0]);
// // console.log(favDrink[1]);
// // console.log(favDrink[2]);
// for(i=0;i<favDrink.length;i++){
//     console.log(favDrink[i]);
// }

// let multipliesTwo = [];
// for(let i=0; i<20; i++){
//     if(i%2==0){
//         multipliesTwo.push(i)
//     }
// }
// console.log(`no's divisible by 2 btw 0 and 20 are: ${multipliesTwo}`);

// let age=15;
// while(age<18){
//     console.log('you are a child');
//     age++;
// }
// console.log("you're an adult");

//Random card generator
// let cards = ["diamond","heart","spade","club"];
// let currentCard = "club";
// while(currentCard!="spade"){
//     console.log(currentCard);
//     currentCard=cards[Math.floor(Math.random()*4)];
// }
// console.log(currentCard);

let str = "Apple, Banana, Kiwi";
let part = str.slice(7);
console.log(part);
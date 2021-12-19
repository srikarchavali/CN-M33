// //Activity 1
// const person = {
//     name: 'remo',
//     age: 25,
//     sayHi(){
//         return `Hi, my name is ${this.name}`
//     }
// }
// console.log(person.sayHi());

// //Activity-2
// const pet = {
//     name: "tom",
//     typeOfPet: "cat",
//     age: 5,
//     colour: "black",
//     eat(){
//         return `${this.name} is eating`;
//     },
//     drink(){
//         return `${this.name} is drinking`;
//     }
// }
// console.log(pet.eat());


// //Activity-3
//declare a new object, called "myCafe"
myCafe = {
    branch: "Manchester",
    //I wanted the drinks the cafe offered as well as the prices of
    //each, so I used a nested array
    drinksOrdered: [["coke","fanta","pepsi"], [2, 1.5, 1.75]], 
    //Another nested array, this time for food.
    foodOrdered: [["pizza", "burger", "sandwich"], [8, 5, 3]],
    //a function built in to the myCafe object. when called, simply
    //displays some text  
    yourOrder(num1, num2){
        return `You're order is ${this.drinksOrdered[0][num1]}-${this.drinksOrdered[1][num1]}£ and ${this.foodOrdered[0][num2]}-${this.foodOrdered[1][num2]}£. `+
               `Total bill is ${this.drinksOrdered[1][num1]+this.foodOrdered[1][num2]}£`;
    } 
}
//now that the object has been made, we need to get some data
//out of it.
//this function requires an object as a parameter (which in
//this case could be "myCafe").
//generate a random (whole) number between 0 and 3....
//then, use that random number to pick out a random element of
//the food array, then the matching element for the price
num1 = Math.round(Math.random()*3);
num2 = Math.round(Math.random()*3);
//once accessed, print them out to the console
 //now, actually call the function (with an object passed as a
//parameter) so something will be displayed
console.log(myCafe.yourOrder(num1, num2));
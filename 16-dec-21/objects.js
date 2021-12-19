// const person = {
//     name: 'srikar',
//     age: 25
// }
// console.log(person.name);
// console.log(person.age);

// let offer = "none";
// let time = 1200
// const cafe = {
//     name: "whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     deinks: ['cappucino',
//             'latte',
//             'filter coffee',
//             'tea',
//             'hot chocolate'
//     ],
//     breakfastOffer: "free croissant with coffee",
//     lunchOffer: "free drink with sandwich",
//     noOffer: "sorry, no offer",
//     openCafe:()=>{
//         return "come on in";
//     },
//     closedCafe()=>{
//         return "we arre closed, come back 2morrow!";
//     }
// };
// console.log(cafe.openCafe());
// console.log(cafe.closedCafe());
// if(time<1100){
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer) 
// } else if(time<1500){
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// }
// let day = "friday";
// const alarm = {
// mondayAlarm: "get up at 7am",
// tuesdayAlarm:"get up at 7am",
// wednesdayAlarm: "get up at 8am",
// thursdayAlarm: "get up at 7:30am",
// fridayAlarm: "get up at 9am",
// weekendAlarm: "no alarm needed"
// }
// if(day=="monday"||day=="tuesday"||day=="wednesday"||day=="friday"||day=="saturday"||day=="sunday"){
// switch(day){
//     case "monday":
//         console.log(alarm.mondayAlarm);
//         break;
//     case "tuesday":
//         console.log(alarm.tuesdayAlarm);
//         break;
//     case "wednesday":        
//         console.log(alarm.wednesdayAlarm);
//         break;
//     case "thursday":
//         console.log(alarm.thursdayAlarm);
//         break;
//     case "friday":
//         console.log(alarm.fridayAlarm);
//         break;
//     default:
//         console.log(alarm.weekendAlarm);
//         break;
// }
// }
// else{
//     console.log("enter a valid day");
// }

// const person = {
//     name: 'srikar',
//     age: 25
//     }
// person.favSongs = ['despacito', 'closer'];
// console.log(`${person.name}'s favourite songs are: ${person.favSongs}`);



let offer = "none";
let time = 1200
const cafe = {
    name: "whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    deinks: ['cappucino',
            'latte',
            'filter coffee',
            'tea',
            'hot chocolate'
    ],
    breakfastOffer: "free croissant with coffee",
    lunchOffer: "free drink with sandwich",
    noOffer: "sorry, no offer",
    openCafe(){
        if(this.hasSpecialOffers){
        return "time for a special offer";
        }
    },
    closedCafe(){
        return "we arre closed, come back 2morrow!";
    }
};
console.log(cafe.openCafe());
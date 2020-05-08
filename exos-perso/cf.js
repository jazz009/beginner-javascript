
// ---- Function CalculateBill ---- //

// function calculateBill(bill, tax){
//     let total = bill * (1 + tax);
//     return total; 
// }

// console.log(`My total is: ${calculateBill(100,0.15)}$`);


// ---- Function Doctorize and yell ---- //

// function doctorize(name){
//     return `Dr. ${name}`; 
// }

// function yell(name){
//     return `HEY ${name.toUpperCase()}`;
// }


// ---- Arrows Function ---- //

// Etape 1

// function inchToCm(inches){
//     const cm = inches * 2.54;
//     return cm;
// }

// Etape 2

// function inchToCm(inches){
//     return inches * 2.54;
// }

// Etape 3

// const inchToCm = inches => inches * 2.54;

// Translate Regular function to arrow 

// const add = (a, b = 3) => a + b;

// function makeABaby(first,last){
//     const baby = {
//         name: `${first} ${last}`,
//          age: 0
//     }
//     return baby;
// }

// const makeABaby = (first,last) => {
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0
//     }
//     return baby;
// }


// ---- IIFE ---- //
// Immediately Invoked Function Expression
// (function (age) {
//     console.log(`Running the Anon function`);
//     return `You are cool and age ${age}`;
// })(45);

// ---- Methods ---- //
// A function that leaves inside of an object

const nico = {
    firstName: `Nicolas`,
     lastName: `Treguier`,
          age: 45,
        sayHi: function(){
            console.log(`Hello le monde`);
            return `Hello the world`;
        },
    yellHi() {
        console.log(`HEY NICOLAS`);
     },
     wisperHi: () => {
        console.log(`Hi Nicolas, i'm a mouse`);
    } 
}

// ---- Callback Function ----//
// click callback
const button = document.querySelector(`.clickMe`);
button.addEventListener('click', nico.yellHi);
// function
function sum(a, b) {
    let total = a + b;
    return total;

}

let elleven = sum(5, 6);
let fifteen = sum(7, 8);
let nineteen = sum(9, 10);

function sum1 (x, y = 0) {
    let total = x * y;
    return total;
}

let box = sum1(10);
let box1 = sum1(20, 10);
let box2 = sum1(10, 15);

// LOOPS
// * for (for....in, for..of)
//* while
//* do while
// for(initializar, coditions, increament)

//FOR LOOP
for(let i = 1;i <=10; i++){
    // console.log(i)
    console.log(i + ". I have a brighter future");
}

// WHILE LOOP
let num = 1;
while (num <= 10){
num = num + 1;
}

let age = 100;
do {
    console.log(age + ". You can't vote");
    age++;
} while (age < 18);

// Array methods
let ages = [19, 26, 24, 18, 22, 35, 30, 33, 31, 29, 18];

for (let age of ages) { // of is fo array and in is for object
    console.log(Math.pow(age, 2));

// Do while loop
// do while loop perform action before it think about
let age = 18;
do {
    console.log(age + ".you can't vote");
    age++;
} while(age < 18)

// ARRAY method
let ages = [19, 26, 42, 18, 22, 35, 30, 33, 31, 19];
for (let ages of ages){
    // console.log(Math.pow(age, 2));
}

// let marriage = ages.filter((mark) => mark > 25);
// console.log(marriage);

// // MAP
// let squares = ages.map((age) => age * age);
// console.log(squares);

// //FIND
// let eighteen = ages.find((age)=> age ===18);
// console.log(eighteen);

let marriage = ages.filter((mark) => mark > 25);
console.log(marriage);

// Map
let squares = ages.map((age) => Math.pow(age, 2));
console.log(squares);

// find
let eighteen = ages.find((age) => age === 18);
console.log(eighteen);
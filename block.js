// if(true){
//     console.log("Hello");
//     console.log("Hello again");
// }

// {} -> block

// let fruits = "apple";
// console.log(fruits);
// {
//     //console.log(fruits)  TDZ (Cannot access fruits as not declared in the block)
//     let fruits;
//     console.log(fruits);
//     fruits = "orange";
//     {
//     console.log(fruits);
//     }
//     console.log(fruits);
// }
// console.log(fruits);


// Variable Shadowing
// const fruits = "apple";
// console.log(fruits);
// {
//     const fruits = "orange";
//     console.log(fruits);
// }
// console.log(fruits);

// illegal shadowing
// If you create a variable in a global scope
// with the let keyword and another variable
// with the var keyword in a block scope but
// the exact same name, it will throw an error

// let fruits = "apple";
// console.log(fruits);
// {
//     var fruits = "orange";
//     console.log(fruits);
// }
// console.log(fruits);

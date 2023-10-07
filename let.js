//In ES6 let & const came

//Temporal Dead Zone (TDZ)
//A temporal dead zone (TDZ) is the block
// where a variable is inaccessible until 
//the moment the computer initializes it 
//with a value.

//Cannot access 'varName' before initialization
//console.log("varName on line number 4", varName);
//declare
// let varName;
// console.log("varName on line number 6", varName);
// varName = 10;
// varName = 20;
// console.log("varName on line number 9", varName);
//let varName; //cannot redeclare

const a = 10;
//No reassign
//No Redeclare
//all things similar to let

console.log(a);

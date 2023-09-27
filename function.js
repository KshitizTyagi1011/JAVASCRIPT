//---------Types of Function-------------
//Function Statement
// function sayHello(param){   //anything can be passed num, string, object, etc..
//     console.log("Hello");
// }

// //If you do not return or pass anything it will return undefined

// sayHello();  //fn. invocation

//function are treated as variables
//function address are stored in variables
//Function Expression
// let fnContainer = function fn(){
//     console.log("I am Expression");
// }

// fnContainer();

//Anonymous Function
// let fnContainer_2 = function(){
//     console.log("I am an Anonymous Function");
// }

// fnContainer_2();

//IIFE-> Immediately Invoked Function expression
// /require, var pollution 
// (function fn(){
//     console.log("I am IIFE");
//     console.log("I wil run on my own");
// })();

//Arrow Function -> react, this
// let fn = (num) => {
//     return num*num;
// }

//or 
// let fn1 = num => num * num; //if single param
// console.log(fn1(5));

//First Class Citizens
//Functions are treated as a variable
// 1. Assignment -> fn. expression
// 2. variable can be passed as a parameter
// 3. function can be passed as a parameter in another function -> fp., hof, callbacks
// function sayHello(param){   
//     console.log("Hello",param);
//     param();
//     return "Hi";
// }
// function smaller(){
//     console.log("Hello I am smaller");
// }

// //sayHello([1,2,3,4]);  //fn. invocation
// let rVal = sayHello(smaller);
// console.log(rVal);

//can also return function inside a function ->closure
function outer(){
    console.log("I am outer returning inner");
    return function(){
        console.log("I am inner");
    }
}

let rVal = outer();
console.log("Rval",rVal);
rVal();

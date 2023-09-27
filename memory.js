// ExecutionContext -> Wrapper

// Inside EC:-
// 1. Global Object
// 2. this

//window 
// console.log(global);

// window == this (in browser)
// console.log(this);

//If code is not inside a function -> global area ke andar code hota hai
//Global Execution Context
//1. Global Object Node ke case mai GLOBAL hota hai
//2. Browser -> Window
//3. this -> Node -> {}
//4, this -> Browser -> Window

// For Variables, Before running the code: var -> Memory allocate (undefined) 
//[Hoisting]
// console.log("a is", a);
// var a;
// console.log("a is", a);
// a = 10;
// console.log("a is", a);

//function statement
//memory run hone se phle hi allocate hojati hai

// fn();
// function fn(){
//     console.log("I can be called before my declaration");
// }
// fn();






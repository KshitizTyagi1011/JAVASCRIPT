// console.log(varName);
// var varName = 10;
// console.log(varName);
// function fn(){
//     console.log(varName);
//     var varName = 20;
//     function b(){
//         console.log(varName);
//     }
//     b();
//     console.log(varName);
// }
// fn();

//Scope -> Area where a fn. or a variable can be found
//Lexical(Literal) Scoping -> function def. ke outside
console.log(varName);
var varName = 10;
function b(){      
    console.log(varName);
}
console.log(varName);
function fn(){
    console.log(varName);
    var varName = 20;
    // called from fn.
    b();
    console.log(varName);
}
fn();
console.log("varName",varName);  //ud
var varName;
console.log("varName",varName);  //ud
varName = "Captain America";
console.log("varName",varName);  //Captain America
fn();
function fn(){
    console.log("Hello from fn");  
}
fn();
// fnContainer();  //error
var fnContainer = function(){
    console.log("I am an Expression");
}
fnContainer();

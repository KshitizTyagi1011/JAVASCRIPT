var a = 10;
console.log("line number 2", a);    //10
function fn(){
    console.log("line number 4", a);   //ud
    var a = 20;
    a++;
    console.log("line number 7", a);   //21
    if(a){
        var a = 30;
        a++;
        console.log("line number 11", a);  //31
    }
    console.log("line number 13", a);  //31
}
fn();
console.log("line number 2", a);  //10
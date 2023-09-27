// console.log("Hello JS:)");
// //declare variable
// //JS only tells you that it is a variable 
// let a;  //By default value is undefined

// a = 10;
// a = 10.1;
// a = "Hello I am a String";
// a = 'Hello I am also a String';
// a = null;
// console.log('variable contains',a);
// a = true;


//variable types: Primitive types: number, string, boolean, null, symbol;
//JS -> similar to JAVA, C++, C

// let number = 10;
// for(let i=1; i<=number; i++){
//     console.log("Number is ", i);
// }

//is prime
let number = 23;
let flag = true;
for(let div=2; div<number; div++){
    if(number % div == 0){
        flag = false;
        break;
    }
}
if(flag == true){
    console.log(number, "is prime");
}
else{
    console.log(number, "is not prime");
}

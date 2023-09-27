// //array declare
// let arr = [];

let array = [1, 2, 3, 4, 5];
console.log(array);
// console.log(array.length);
// let i = 0;
// while(i < array.length){
//     console.log("elem at index",i," is ",array[i]);
//     i++;
// }

//push, unshift
// array.push("last value");   //value insert at last
// array.unshift("first value"); // at starting
console.log("-------------------------------------");
// console.log(array);

// array.shift();  //remove from start
// array.pop();    //remove from last
console.log("---------------------------------------");
// console.log(array);

//slice -> does not affect the og array , make changes in copy
// // start idx, ending idx
// let partOfAnArray = array.slice(2,4);
// console.log(partOfAnArray);
// console.log(array);

array.splice(2,3);   // delete from the actual array
console.log(array);

//index of //contain





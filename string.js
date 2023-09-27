let singleQuotes = '     How are you     ';
let doubleQuotes = "double quotes ki string";

// console.log(singleQuotes);
// console.log(doubleQuotes);

// let char = singleQuotes.charAt(4);
// let Ascii = singleQuotes.charCodeAt(4);
// let substring = singleQuotes.substring(2,8);
// console.log(substring);
// console.log(char);
// console.log(Ascii);

// let arrStr = singleQuotes.split("i");
// console.log(arrStr);  //OUTPUT: [ 's', 'ngle quotes k', ' str', 'ng' ]

singleQuotes = singleQuotes.trim();   // trim -> remove whitespaces from the string
let arrStr2 = singleQuotes.split(" ");
console.log(arrStr2);
let str = arrStr2.join("+");
console.log(str);




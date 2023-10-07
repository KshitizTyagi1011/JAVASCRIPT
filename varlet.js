let letFruit = "orange";
var varFruit = "orange";
console.log("leftFruit", letFruit, "varFruit", varFruit);  //orange,  orange
{
    let letFruit = "apple";  
    var varFruit = "apple";
    console.log("leftFruit", letFruit, "varFruit", varFruit);  //apple, apple
}
console.log("leftFruit", letFruit, "varFruit", varFruit); // orange,  apple
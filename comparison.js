// greater than > , less than < 
/* console.log(8 > 6);
console.log(10 < 12);
console.log(15 < 10);
console.log(25 > 100); */

// equal ==, not !=
/* console.log(5 == 6);
console.log(5 == 5);
console.log(5 != 5);
console.log(5 != 6); */

// ===, !==
var num1 = 25;
var num2 = 36;
var num3 = "25";
var num4 = "36";

/* console.log(num1 == num3);
console.log(num1 === num3);

console.log(num2 != num4);
console.log(num2 !== num4); */

// multiple comparison
var rony = 2000;
var rakib = 1500;
var picnicCost = 1000;
var travelCost = 500;
var watchPrice = 250;
var carPrice = 900;

if((carPrice + travelCost)< rony){
    console.log("Rony will go to Cox's Bazar");
}
else {
    console.log("Oops! Rony,, Next time..")
}
if((carPrice + picnicCost)< rakib){
    console.log("rakib will go to Cox's Bazar");
}
else {
    console.log("Oops! Rakib,, Next time..")
}
if(((carPrice + travelCost)< rony) && ((carPrice + travelCost)< rakib)) {
    console.log("Wow... You both can go to Cox's Bazar.")
}

if(((carPrice + travelCost)< rony) || ((carPrice + picnicCost)< rakib)) {
    console.log("Picnic Cancel..Let's Have a long drive..")
}
if(((carPrice + travelCost)< rony) && ((carPrice + picnicCost)< rakib)) {
    console.log("Yeah,,Picnic Confirm.")
}



// Concatanation and Interpolations
var price = 50;
var itemName = "Cup";
var messageToPrint = "The price for your " + itemName + " is " + price + " dollars"; // Concatenation
console.log(messageToPrint);

var itemName2 = "Table";
var price2 = 100;
var messageToPrint2 = "The price for your " + itemName2 + " is " + price2 + " dollars"; // Concatenation
console.log(messageToPrint2);



var messageToPrint1 = `The price for your ${itemName} is ${price} dollars`; // Interpolation
console.log(messageToPrint1);

var messageToPrint3 = `The price for your ${itemName2} is ${price2} dollars`; // Interpolation
console.log(messageToPrint3);

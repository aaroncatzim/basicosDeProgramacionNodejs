//objects and arrays

var customer ={
    firstName: "Aaron",
    lastName: "Catzim",
    age: 43,
    dateOfBirth: "07/07/1983",
    sex: "Male",
    cars: ["Volvo", "Toyota", "Nissan"]
}
customer.firstName = "Josué";
customer['lastName'] = "Alcaraz";
console.log(`${customer.firstName} ${customer.lastName} is ${customer.age} years old.`);


//arrays
var cars = ["Volvo", "Toyota", "Nissan"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

cars[0] = "Mazda";

console.log(cars[0], cars[1], cars[2]);

console.log(`${customer.firstName} ${customer.lastName} has a ${customer.cars[0]} and a ${customer.cars[1]}.`);

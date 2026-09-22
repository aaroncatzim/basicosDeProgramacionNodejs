//Loops

console.log("Loops");
console.log("Loops");
console.log("Loops");
console.log("Loops");

//for (stament initialization; condition; increment) {
    //execute some code
//}

//for loop (for i loop)
for (var i = 0; i < 4; i++) {
    console.log('Loops' + i);
}

var cars = ["Volvo", "Toyota", "Nissan"];
// for loop (for each loop)
for(let car of cars){ //car is a variable that will hold the value of each element in the array
    console.log(car);
}


var cars = ["Volvo", "Toyota", "Nissan"];
// for loop (for each loop)
for(let car of cars){ //car is a variable that will hold the value of each element in the array
    console.log(car);
    if(car === "Toyota"){
        break; //break the loop if the car is Toyota
}
}

//Es6 syntax for each loop
cars.forEach( car => {
    console.log(car + " is a car");

});
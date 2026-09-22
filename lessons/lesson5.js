//Logical "AND"

console.log(true && true); //all values have to be True for the expression to be True
console.log(true && false); //one value is False, so the expression is False
console.log(false && true); //one value is False, so the expression is False
console.log(false && false); //all values are False, so the expression is False

//Logical "OR"

console.log(true || true); //one value is True, so the expression is True
console.log(true || false); //one value is True, so the expression is True
console.log(false || true); //one value is True, so the expression is True
console.log(false || false); //all values are False, so the expression is False

//Driver license example

var ageIsMoreThan18 = false;
var isMexicanCitizen = true;

var eligibilityForDriverLicense = ageIsMoreThan18 && isMexicanCitizen;
console.log('this customer is eligible for DL: ' + eligibilityForDriverLicense);

//logical "NOT"

console.log(!true); //False
console.log(!false); //True

var isMexicanCitizen = true;
var isNotMexicanCitizen = !isMexicanCitizen;
console.log('is not mexican citizen: ' + isNotMexicanCitizen);

console.log(6 == 10); //False
console.log(6 !== 10); //True
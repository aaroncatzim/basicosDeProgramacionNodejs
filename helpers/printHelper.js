export function printAge(age){
    console.log(`My current age is ${age}`);
}

 class CustomerDetails{

    printFirstName(fisrtName){
        console.log(`My first name is ${fisrtName}`);
    }
    /**
     * This method prints the last name of the customer
     * @param {strin} lastName 
     */
    printLastName(lastName){
        console.log(lastName);
    }
}

export const customerDetails = new CustomerDetails(); //this is a constant that is an instance of the class CustomerDetails, this way we can use the methods of the class without having to create a new instance of the class every time we want to use it.
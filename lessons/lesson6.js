//Conditional statements

if(condition){
    //execute some code
}else{
    //execute some other code
}

// If hour between 6am and 12pm print "Good Morning"
//If hour between 12pm and 6pm print "Good Afternoon"
//otherwise print "Good Evening"

var hour = 17;

if(hour >= 6 && hour < 12){
    console.log('Good Morning');
}else if(hour >=12 && hour < 18){
    console.log('Good Afternoon');
}else{
    console.log('Good Evening');
}


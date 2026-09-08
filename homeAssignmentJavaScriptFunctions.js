// Function Declaration 

function userProfile(name) {
    let a = "Hello Priya!"
    console.log(a)  
}
userProfile()


// Arrow Function

function double(number) {
    let multiply=(x,y)=>x*y
    console.log(multiply(2,2));
    console.log(multiply(7,2))
}
double()

//  Anonymous Function

setTimeout (function() {
    console.log("This message is delayed by 2 seconds")
    
}, 2000)

// Callback Function

function getUserData(setTimeout) {
    setTimeout
}

setTimeout (function () {
    console.log("Call Back Function");
    
}, 3000)
getUserData(setTimeout)
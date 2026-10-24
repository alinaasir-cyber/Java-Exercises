// function delayBlocking() {
//     console.log("Blocking: Start waiting...");
    
//     // Ku dayashada daahitaan (approx. 2 seconds using a busy-wait loop)
//     const start = Date.now();
//     while (Date.now() - start < 2000) {
//         // Sugitaanka adigoo qabanaya CPU-ga
//     }
    
//     console.log("Blocking: Done waiting after 2 seconds!");
// }


// function delayNonBlocking(callback) {
//     console.log("Non-Blocking: Start waiting...");
    
//     setTimeout(() => {
//         console.log("Non-Blocking: Done waiting after 2 seconds!");
//         if (callback) callback();
//     }, 2000);
// }


// delayNonBlocking(() => {
//     console.log("Callback executed!");
// });
// console.log("This message shows up immediately in Non-Blocking!");



function operate(num1, num2, callback) {
    return callback(num1, num2);
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}


console.log("Addition Result:", operate(10, 5, add));         

console.log("Subtraction Result:", operate(10, 5, subtract));   

console.log("Multiplication Result:", operate(10, 5, multiply)); 
console.log("Division Result:", operate(10, 5, divide));       

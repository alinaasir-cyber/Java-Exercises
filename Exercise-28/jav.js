function delayBlocking() {
    console.log("Blocking: Start waiting...");
    
    // Ku dayashada daahitaan (approx. 2 seconds using a busy-wait loop)
    const start = Date.now();
    while (Date.now() - start < 2000) {
        // Sugitaanka adigoo qabanaya CPU-ga
    }
    
    console.log("Blocking: Done waiting after 2 seconds!");
}


function delayNonBlocking(callback) {
    console.log("Non-Blocking: Start waiting...");
    
    setTimeout(() => {
        console.log("Non-Blocking: Done waiting after 2 seconds!");
        if (callback) callback();
    }, 2000);
}


delayNonBlocking(() => {
    console.log("Callback executed!");
});
console.log("This message shows up immediately in Non-Blocking!");




function fetchUserData() {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const success = true;
            
            if (success) {
                resolve({ name: "Alice", age: 25, city: "Wonderland" });
            } else {
                reject("Failed to fetch user data");
            }
        }, 3000);
    });
}


fetchUserData()
    .then((user) => {
        console.log("Here is the user data:", user);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
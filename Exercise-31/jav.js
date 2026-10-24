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

// async function fetchJSONData() {
//     try {
//         console.log("Fetching JSON data...");

//         const response = await fetch("./date.json");
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const jsonData = await response.json();
//         console.log("JSON Data received:", jsonData);
//         return jsonData;
//     } catch (error) {
//         console.error("Failed to fetch data:", error);
//         throw error;
//     }
// }

// fetchJSONData();
// console.log("This code runs immediately while waiting for the fetch request.");



async function fetchUsers() {
    try {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        
        const users = await response.json();
        
        
        console.log("List of users:", users);
        
    } catch (error) {
        

        console.error("Error fetching users:", error);
    }
}

fetchUsers();
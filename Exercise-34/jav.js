
// const mainTitle = document.querySelector("#title");
// console.log("Single Element (querySelector):", mainTitle);


// const skillItems = document.querySelectorAll(".skill-item");

// console.log("Multiple Elements (querySelectorAll):", skillItems);


// skillItems.forEach((item, index) => {
//     console.log(`Skill ${index + 1}:`, item.textContent);
// });



function addItem() {
    const list = document.getElementById("myList");
    

    const newItem = document.createElement("li");
    

    newItem.textContent = `New Item ${list.children.length + 1}`;
    
    
    list.appendChild(newItem);
}


function removeItem() {
    const list = document.getElementById("myList");
    
    
    if (list.lastElementChild) {
        list.lastElementChild.remove();
    } else {
        alert("Empty!");
    }
}
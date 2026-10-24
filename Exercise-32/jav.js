
const mainTitle = document.querySelector("#title");
console.log("Single Element (querySelector):", mainTitle);


const skillItems = document.querySelectorAll(".skill-item");

console.log("Multiple Elements (querySelectorAll):", skillItems);


skillItems.forEach((item, index) => {
    console.log(`Skill ${index + 1}:`, item.textContent);
});
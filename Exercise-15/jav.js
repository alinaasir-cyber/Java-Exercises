// // fruits
// const fruits = ["apple", "banana", "cherry"];


// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }



const people = [
    { name: "Alice", age: 25, city: "Wonderland" },
    { name: "Bob", age: 30, city: "Mogadishu" },
    { name: "Charlie", age: 28, city: "Nairobi" }
];


people.forEach((person, index) => {
    console.log(`--- Person ${index + 1} ---`);
    for (const key in person) {
        console.log(key + ": " + person[key]);
    }
});
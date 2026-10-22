// // fruits
// const fruits = ["apple", "banana", "cherry"];


// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// 1. Abuurista array ay ku jiraan saddex qof (Alice iyo labada cusub)
const people = [
    { name: "Alice", age: 25, city: "Wonderland" },
    { name: "Bob", age: 30, city: "Mogadishu" },
    { name: "Charlie", age: 28, city: "Nairobi" }
];

// 2. Loop lagu dhex wareegayo qof kasta iyo sifooyinkiisa (properties)
people.forEach((person, index) => {
    console.log(`--- Person ${index + 1} ---`);
    for (const key in person) {
        console.log(key + ": " + person[key]);
    }
});
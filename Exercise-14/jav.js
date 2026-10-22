// // fruits
// const fruits = ["apple", "banana", "cherry"];


// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

let number;

do {

    number = prompt("Fadlan soo geli tiro ka weyn 10:");
    
    number = Number(number);

} while (number <= 10 || isNaN(number)); 


console.log("Mahadsanid! Waxaad soo gelisay tiro ka weyn 10: " + number);
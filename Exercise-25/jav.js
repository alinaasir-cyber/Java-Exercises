// const colors = ["red", "green", "blue"];


// const [first, , third] = colors;


// console.log(first); 
// console.log(third);



const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];


const combinedArray = [...arr1, ...arr2];


console.log(combinedArray);


function multiply(...numbers) {
    return numbers.reduce((total, num) => total * num, 1);
}


console.log(multiply(2, 3));
console.log(multiply(2, 3, 4));
console.log(multiply(1, 2, 3, 5));
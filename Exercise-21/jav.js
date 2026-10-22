// const numbers = [1, 2, 3, 4, 5];


// numbers.forEach(function(number) {
//     console.log(number);
// });




const numbers = [1, 2, 3, 4, 5];


const product = numbers.reduce((accumulator, currentVal) => accumulator * currentVal, 1);


console.log(product);

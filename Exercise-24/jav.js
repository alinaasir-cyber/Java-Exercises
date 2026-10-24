// const colors = ["red", "green", "blue"];


// const [first, , third] = colors;


// console.log(first); 
// console.log(third);


function calculateArea(width, height = width) {
    return width * height;
}


console.log(calculateArea(5, 10));
console.log(calculateArea(5));
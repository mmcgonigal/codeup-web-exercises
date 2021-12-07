console.log("It's Math Time");
console.log(Math.random)

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(getRandomArbitrary(0,100));  // including floating points

// function getRandomInt(min, max) {
//     const randomNumber = Math.random() * (max - min) + min
//     console.log("before Floor || ceil", randomNumber)
//     console.log("after floor", Math.floor(randomNumber))
//     console.log("after ceil",Math.ceil(randomNumber))
//     console.log("after rounding,", Math.round(randomNumber))
//     return Math.floor(randomNumber);

// min = Math.ceil(min);
// max = Math.floor(max);

console.log(Math.pow(8,2))
console.log(8 ** 2);
console.log("PI", Math.PI)
console.log("E", Math.E)
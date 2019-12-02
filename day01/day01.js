const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split('\n');

let result = input.map(val => {
    return Math.floor(val / 3) - 2;
}).reduce((a, b) => a + b);

console.log(`Part 1: ${result}`);


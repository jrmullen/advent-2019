const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split('\n');

const calculateFuel = val => {
    return Math.floor(val / 3) - 2;
};

const reduceFuel = val => {
    if (val < 0) {
        return part2 += 0;
    } else {
        part2 += val;
        let reduction = calculateFuel(val);
        reduceFuel(reduction);
    }
};

const firstReduction = input.map(element => {
    return calculateFuel(element)
});

const part1 = firstReduction.reduce((a, b) => a + b);
let part2 = 0;

firstReduction.forEach(element => {
    return reduceFuel(element);
});

console.log(`Part 1: ${part1}`);
console.log(`Part 2: ${part2}`);

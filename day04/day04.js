const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split('\n');

const MIN = input[0].split('-')[0];
const MAX = input[0].split('-')[1];

let part1 = 0;

let range = Array.from({ length: MAX - MIN }, (_, i) => (Number(MIN) + i).toString());

range.forEach(element => {

    let containsAdjacent = false;
    let decreases = false;

    for (let i = 0; i < element.length; i++) {
        let current = Number(element[i]);
        let next = Number(element[i +  1]);

        if (current > next) {
            decreases = true;
        }

        if (current === next) {
            containsAdjacent = true;
        }
    }

    if (containsAdjacent && !decreases) {
        part1++;
    }
});

console.log(`Part 1: ${part1}`);

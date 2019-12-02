const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split(',').map(Number);

const add = (a, b) => {
    return a + b;
};

const multiply = (a, b) => {
    return a * b;
};

for (let i = 0; i < input.length; i += 4) {
    let opcode = input[i];
    let position1 = input[i + 1];
    let position2 = input[i + 2];
    let overwrite = input[i + 3];

    switch (opcode) {
        case 99:
            console.log('Finished');
            break;
        case 1:
            input[overwrite] = add(input[position1], input[position2]);
            break;
        case 2:
            input[overwrite] = multiply(input[position1], input[position2]);
            break;
        default:
            break;
    }
}

console.log(`Part 1: ${input[0]}`);


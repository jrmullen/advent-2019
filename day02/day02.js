const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split(',').map(Number);

const part1 = (replace1, replace2) => {
    let snapshot = input.slice();

    snapshot[1] = replace1;
    snapshot[2] = replace2;

    for (let i = 0; i < snapshot.length; i += 4) {
        let opcode = snapshot[i];
        let position1 = snapshot[i + 1];
        let position2 = snapshot[i + 2];
        let overwrite = snapshot[i + 3];
        let output = snapshot[0];

        switch (opcode) {
            case 99:
                return output;
            case 1:
                snapshot[overwrite] = snapshot[position1] + snapshot[position2];
                break;
            case 2:
                snapshot[overwrite] = snapshot[position1] * snapshot[position2];
                break;
            default:
                break;
        }
    }

};

const part2 = target => {
    for (let noun = 0; noun <= 99; noun++) {
        for (let verb = 0; verb <= 99; verb++) {

            let result = part1(noun, verb);

            if (result === target) {
                return 100 * noun + verb;
            }
        }
    }
};


console.log(`Part 1: ${part1(12, 2)}`);
console.log(`Part 2: ${part2(19690720)}`);


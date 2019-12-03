const fs = require('fs');
const _ = require('lodash');

const input = fs.readFileSync('input.txt').toString().split('\n');

const wire1 = input[0].split(',');
const wire2 = input[1].split(',');

const graph = (wire) => {

    let currentX = 0;
    let currentY = 0;

    let coordinates = new Set();

    wire.forEach(step => {
        let direction = step[0];
        let distance = Number(step.substring(1, step.length));

        switch(direction) {
            case 'U':
                for (let i = 1; i <= distance; i++) {
                    currentY++;
                    coordinates.add(`${currentX},${currentY}`);
                }
                break;
            case 'D':
                for (let i = 1; i <= distance; i++) {
                    currentY--;
                    coordinates.add(`${currentX},${currentY}`);
                }
                break;
            case 'L':
                for (let i = 1; i <= distance; i++) {
                    currentX--;
                    coordinates.add(`${currentX},${currentY}`);
                }
                break;
            case 'R':
                for (let i = 1; i <= distance; i++) {
                    currentX++;
                    coordinates.add(`${currentX},${currentY}`);
                }
                break;
        }
    });

    return coordinates;
};

let w1Graph = graph(wire1);
let w2Graph = graph(wire2);

let intersections = [];
w1Graph.forEach(element => {
    if (w2Graph.has(element)) {
        intersections.push(element);
    }
});

const calculateManhattan = intersections => intersections.map(element => {
    let x  = Number(element.split(',')[0]);
    let y  = Number(element.split(',')[1]);
    return Math.abs(x) + Math.abs(y)
});

let distances = calculateManhattan(intersections);

console.log(`Part 1: ${Math.min(...distances)}`);

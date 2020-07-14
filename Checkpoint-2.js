// function countingSheep(input) {
//   if (input > 0) {
//     console.log(`${input}: Another sheep jumps over the fence`);
//     countingSheep(input - 1);
//   }
//   else {
//     console.log('All sheep jumped over the fence');
//   }
// }

// countingSheep(3);

// function powerCalculator(b, e) {
//   if (e < 0) { return 'exponent should be >= 0'; }
//   return e > 1 ? b * powerCalculator(b, e - 1) : b;
// }

// console.log(powerCalculator(2,3));

// const reverseString = (string) => string.length > 1 ? reverseString(string.slice(1)) + string[0] : string;

// console.log(reverseString('testing'));

// const triangularNumber = (n) => n > 1 ? n + triangularNumber(n - 1) : 1;

// console.log(triangularNumber(5));

// function stringSplitter(string, separator) {
//   let index = string.indexOf(separator);
//   if (index === -1) { return [string]; }
//   return [string.slice(0, index), ...stringSplitter(string.slice(index + 1), separator)];
// }

// console.log(stringSplitter('02/20/2020', '/'));

// const fibonacci = (index, array = []) => {
//   if (array.length === index) {
//     console.log(array.join(', '));
//   }
//   else if (array.length < 2) {
//     fibonacci(index, [...array, 1]);
//   }
//   else {
//     fibonacci(index, [...array, array.slice(-2).reduce((a, b) => a + b)]);
//   }
// };

// fibonacci(7);

// const factorial = (number) => number > 1 ? number * factorial(number - 1) : 1;

// console.log(factorial(5));

//////////////8

// let mySmallMaze = [
//   [' ', ' ', ' '],
//   [' ', '*', ' '],
//   [' ', ' ', 'e']
// ];

// let maze = [
//   [' ', ' ', ' ', '*', ' ', ' ', ' '],
//   ['*', '*', ' ', '*', ' ', '*', ' '],
//   [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//   [' ', '*', '*', '*', '*', '*', ' '],
//   [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ];

// function mazeWalker(maze, row = 0, column = 0) {
//   if (maze[row][column] === 'e') {
//     return '';
//   } else if (maze[row][column] === ' ') {
//     maze[row][column] = '*';
//     if (column < maze[row].length - 1 && maze[row][column + 1] !== '*') {
//       return 'R' + mazeWalker(maze, row, column + 1);
//     }
//     if (row < maze.length - 1 && maze[row + 1][column] !== '*') {
//       return 'D' + mazeWalker(maze, row + 1, column);
//     }
//     if (column > 0 && maze[row][column - 1] !== '*') {
//       return 'L' + mazeWalker(maze, row, column - 1);
//     }
//     if (row > 0 && maze[row - 1][column] !== '*') {
//       return 'U' + mazeWalker(maze, row - 1, column);
//     }
//   }
// }


// console.log(mazeWalker(maze));


// const anagrams = (word) => {
//   let result = [];
//   if (word.length <= 1) {
//     return [word];
//   }

//   for (let i = 0; i < word.length; i++) {
//     let c = word[i];
//     let remaining = word.slice(0, i) + word.slice(i + 1);
//     let ans = anagrams(remaining);
//     ans.forEach(a => result.push(c + a));
//   }
//   return result;
// };

// console.log(anagrams('east'));










// const Zuckerberg = {
//   Schroepfer: {
//     Bosworth: ['Steve', 'Kyle', 'Andrea'],
//     Zhao: ['Richie', 'Sofia', 'Jen']
//   },
//   Schrage: {
//     VanDyck: ['Sabrina', 'Michelle', 'Josh'],
//     Swain: ['Blanch', 'Tom', 'Joe']
//   },
//   Sandberg: {
//     Goler: ['Eddie', 'Julie', 'Annie'],
//     Hernandez: ['Rowi', 'Inga', 'Morgan'],
//     Moissinac: ['Amy', 'Chuck', 'Vinni'],
//     Kelley: ['Eric', 'Ana', 'Wes']
//   }
// };


// const orgChart = (chart, depth=0) => {
//   if (Array.isArray(chart)) {
//     return chart.map(unit => '\n' + orgChart(unit,depth)).join('');
//   } else if (typeof chart === 'object') {
//     return Object.keys(chart).map(unit => '\n' + '\t'.repeat(depth) + unit + orgChart(chart[unit],depth+1)).join('');
//   } else {
//     return '\t'.repeat(depth) + chart;
//   }
// };

// console.log(orgChart(Zuckerberg));


// if (typeof chart === 'object') {
//   return Object.keys(chart).map(unit => '\n\t'+ unit + orgChart(chart[unit])).join('');
// } else if(typeof chart==='array') {
//   return '\n\t'+chart;
// }

//  const binaryRep=(num)=>num===0?0:10*binaryRep(Math.floor(num/2))+num%2;

// console.log(binaryRep(25));
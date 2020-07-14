// function countingSheep(input) {
//   for (i = input; i > -1; i--) {
//     i > 0 ? console.log(`${i}: Another sheep jumps over the fence`) : console.log('All sheep jumped over the fence');
//   }
// }

// countingSheep(3);


// function powerCalculator(b, e) {
//   if (e < 0) { return 'exponent should be >= 0'; }
//   return b**e;
// }

// console.log(powerCalculator(2, 3));

// const reverseString = (string) => {
//   let output = '';
//   for (i = string.length - 1; i >= 0; i--) {
//     output += string[i];
//   }
//   return output;
// };

// console.log(reverseString('testing'));

// const triangularNumber = n => {
//   let sum = 0;
//   for (let i = 0; i < n + 1; i++) {
//     sum += i;
//   }
//   return sum;
// };

// console.log(triangularNumber(5));

// function stringSplitter(string, separator) {
//   let output = [];
//   while (string.indexOf(separator) !== -1) {
//     output.push(string.slice(0, string.indexOf(separator)));
//     string = string.slice(string.indexOf(separator) + 1);
//   }
//   output.push(string);
//   return output;
// }

// console.log(stringSplitter('02/20/2020', '/'));

// const fibonacci = (index) => {
//   let result = [0, 0];
//   for (let i = 0; i < index; i++) {
//     if (i === 0) {
//       result.push(1);
//     } else {
//       result.push(result.slice(-2).reduce((a, b) => a + b));
//     }
//   }
//   console.log(result.slice(2).join(', '));
// };

// fibonacci(15);

// const factorial = (number) => {
//   let result = 1;
//   for (let i = 1; i < number + 1; i++) {
//     result *= i;
//   }
//   return result;
// };

// console.log(factorial(6));

function towerOfHanoi(
  depth,
  source = 0,
  dest = 2,
  temp = 1,
  status = [Array.from(Array(depth), (_, i) => depth - i), [], []]) {
  if (depth === 1) {
    console.log(`Moved ${source} to ${dest}`);
    status[dest].push(status[source].pop());
    console.log(status);
    return
  }
  towerOfHanoi(depth-1, source, temp, dest, status);
  towerOfHanoi(1, source, dest, temp, status);
  towerOfHanoi(depth-1, temp, dest, source, status);
}

towerOfHanoi(3);
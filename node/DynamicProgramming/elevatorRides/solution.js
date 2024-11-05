// Test with specific test case:
// cat DynamicProgramming/elevatorRides/tests/1.in | node DynamicProgramming/elevatorRides/solution.js

// Test against all test cases with:
// node test DynamicProgramming/elevatorRides

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, x] = lines[0].split(' ').map(Number);
  const weights = lines[1].split(' ').map(Number);
  solveProblem(n, x, weights);
});

function solveProblem(n, x, weights) {
  console.log("n:", n, "\nx:", x, "\nWeights:", weights);
}

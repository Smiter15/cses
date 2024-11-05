// Test with specific test case:
// cat DynamicProgramming/arrayDescription/tests/1.in | node DynamicProgramming/arrayDescription/solution.js

// Test against all test cases with:
// node test DynamicProgramming/arrayDescription

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const array = lines[1].split(' ').map(Number);
  solveProblem(n, m, array);
});

function solveProblem(n, m, array) {
  console.log("n:", n, "\nm:", m, "\nArray:", array);
}

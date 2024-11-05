// Test with specific test case:
// cat DynamicProgramming/rectangleCutting/tests/1.in | node DynamicProgramming/rectangleCutting/solution.js

// Test against all test cases with:
// node test DynamicProgramming/rectangleCutting

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [a, b] = lines[0].split(' ').map(Number);
  solveProblem(a, b);
});

function solveProblem(a, b) {
  console.log("a:", a, "\nb:", b);
}

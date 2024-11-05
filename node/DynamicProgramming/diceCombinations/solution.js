// Test with specific test case:
// cat DynamicProgramming/diceCombinations/tests/1.in | node DynamicProgramming/diceCombinations/solution.js

// Test against all test cases with:
// node test DynamicProgramming/diceCombinations

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  solveProblem(n);
});

function solveProblem(n) {
  console.log("n:", n);
}

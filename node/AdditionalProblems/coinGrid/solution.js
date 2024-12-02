// Test with specific test case:
// cat AdditionalProblems/coinGrid/tests/1.in | node AdditionalProblems/coinGrid/solution.js

// Test against all test cases with:
// node test AdditionalProblems/coinGrid

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Size of the grid
  const grid = lines.slice(1).map((line) => line.split('')); // Grid representation
  solveProblem(n, grid);
});

function solveProblem(n, grid) {
  console.log('Grid size (n):', n, '\nGrid:', grid);
}

// Test with specific test case:
// cat AdditionalProblems/coinArrangement/tests/1.in | node AdditionalProblems/coinArrangement/solution.js

// Test against all test cases with:
// node test AdditionalProblems/coinArrangement

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Width of the grid
  const grid = lines.slice(1).map((row) => row.split(' ').map(Number)); // 2xN grid with coins
  solveProblem(n, grid);
});

function solveProblem(n, grid) {
  console.log('Grid width (n):', n, '\nGrid:', grid);
}

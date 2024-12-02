// Test with specific test case:
// cat AdditionalProblems/swapGame/tests/1.in | node AdditionalProblems/swapGame/solution.js

// Test against all test cases with:
// node test AdditionalProblems/swapGame

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const grid = lines.map((line) => line.split(' ').map(Number));
  solveProblem(grid);
});

function solveProblem(grid) {
  console.log('Initial Grid:', grid);
}

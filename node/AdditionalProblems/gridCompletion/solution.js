// Test with specific test case:
// cat AdditionalProblems/gridCompletion/tests/1.in | node AdditionalProblems/gridCompletion/solution.js

// Test against all test cases with:
// node test AdditionalProblems/gridCompletion

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Grid size
  const grid = lines.slice(1).map((line) => line.split('')); // Grid
  solveProblem(n, grid);
});

function solveProblem(n, grid) {
  console.log('Grid size (n):', n, '\nGrid:', grid);
}

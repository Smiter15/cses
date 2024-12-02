// Test with specific test case:
// cat AdditionalProblems/numberGrid/tests/1.in | node AdditionalProblems/numberGrid/solution.js

// Test against all test cases with:
// node test AdditionalProblems/numberGrid

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const [y, x] = input.trim().split(' ').map(Number); // Row and column indices
  solveProblem(y, x);
});

function solveProblem(y, x) {
  console.log('Row:', y, '\nColumn:', x);
}

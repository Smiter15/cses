// Test with specific test case:
// cat AdditionalProblems/foodDivision/tests/1.in | node AdditionalProblems/foodDivision/solution.js

// Test against all test cases with:
// node test AdditionalProblems/foodDivision

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Number of children
  const current = lines[1].split(' ').map(Number); // Current food distribution
  const required = lines[2].split(' ').map(Number); // Required food distribution
  solveProblem(n, current, required);
});

function solveProblem(n, current, required) {
  console.log('Number of Children (n):', n, '\nCurrent Food:', current, '\nRequired Food:', required);
}

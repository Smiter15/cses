// Test with specific test case:
// cat AdditionalProblems/countingBishops/tests/1.in | node AdditionalProblems/countingBishops/solution.js

// Test against all test cases with:
// node test AdditionalProblems/countingBishops

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const [n, k] = input.trim().split(' ').map(Number); // Board size and number of bishops
  solveProblem(n, k);
});

function solveProblem(n, k) {
  console.log('Board size (n):', n, '\nNumber of bishops (k):', k);
}

// Test with specific test case:
// cat AdditionalProblems/permutationsII/tests/1.in | node AdditionalProblems/permutationsII/solution.js

// Test against all test cases with:
// node test AdditionalProblems/permutationsII

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const n = parseInt(input.trim(), 10); // Input integer n
  solveProblem(n);
});

function solveProblem(n) {
  console.log('Input integer (n):', n);
}

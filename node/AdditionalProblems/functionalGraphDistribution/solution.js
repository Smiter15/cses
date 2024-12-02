// Test with specific test case:
// cat AdditionalProblems/functionalGraphDistribution/tests/1.in | node AdditionalProblems/functionalGraphDistribution/solution.js

// Test against all test cases with:
// node test AdditionalProblems/functionalGraphDistribution

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const n = parseInt(input.trim(), 10); // Number of nodes
  solveProblem(n);
});

function solveProblem(n) {
  console.log('Number of nodes (n):', n);
}

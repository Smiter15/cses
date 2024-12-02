// Test with specific test case:
// cat AdditionalProblems/removingDigitsII/tests/1.in | node AdditionalProblems/removingDigitsII/solution.js

// Test against all test cases with:
// node test AdditionalProblems/removingDigitsII

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const n = BigInt(input.trim()); // Input number as BigInt
  solveProblem(n);
});

function solveProblem(n) {
  console.log('Input number (n):', n.toString());
}

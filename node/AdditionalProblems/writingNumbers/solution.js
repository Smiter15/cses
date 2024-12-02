// Test with specific test case:
// cat AdditionalProblems/writingNumbers/tests/1.in | node AdditionalProblems/writingNumbers/solution.js

// Test against all test cases with:
// node test AdditionalProblems/writingNumbers

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const n = BigInt(input.trim()); // Maximum presses for keys
  solveProblem(n);
});

function solveProblem(n) {
  console.log('Max Key Presses (n):', n.toString());
}

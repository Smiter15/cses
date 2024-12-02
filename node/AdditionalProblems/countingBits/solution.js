// Test with specific test case:
// cat AdditionalProblems/countingBits/tests/1.in | node AdditionalProblems/countingBits/solution.js

// Test against all test cases with:
// node test AdditionalProblems/countingBits

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const n = BigInt(input.trim());
  solveProblem(n);
});

function solveProblem(n) {
  console.log('Number:', n.toString());
}

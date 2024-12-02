// Test with specific test case:
// cat AdditionalProblems/bitSubstrings/tests/1.in | node AdditionalProblems/bitSubstrings/solution.js

// Test against all test cases with:
// node test AdditionalProblems/bitSubstrings

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const bitString = input.trim(); // Input binary string
  solveProblem(bitString);
});

function solveProblem(bitString) {
  console.log('Input binary string:', bitString);
}

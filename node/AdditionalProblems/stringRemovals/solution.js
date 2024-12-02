// Test with specific test case:
// cat AdditionalProblems/stringRemovals/tests/1.in | node AdditionalProblems/stringRemovals/solution.js

// Test against all test cases with:
// node test AdditionalProblems/stringRemovals

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const string = input.trim(); // Input string
  solveProblem(string);
});

function solveProblem(string) {
  console.log('Input String:', string);
}

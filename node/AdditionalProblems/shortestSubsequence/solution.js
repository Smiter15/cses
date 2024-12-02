// Test with specific test case:
// cat AdditionalProblems/shortestSubsequence/tests/1.in | node AdditionalProblems/shortestSubsequence/solution.js

// Test against all test cases with:
// node test AdditionalProblems/shortestSubsequence

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const sequence = input.trim();
  solveProblem(sequence);
});

function solveProblem(sequence) {
  console.log('DNA Sequence:', sequence);
}

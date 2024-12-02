// Test with specific test case:
// cat AdditionalProblems/countingSequences/tests/1.in | node AdditionalProblems/countingSequences/solution.js

// Test against all test cases with:
// node test AdditionalProblems/countingSequences

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const [n, k] = input.trim().split(' ').map(Number); // Length of sequence and range of integers
  solveProblem(n, k);
});

function solveProblem(n, k) {
  console.log('Length of sequence (n):', n, '\nRange of integers (k):', k);
}

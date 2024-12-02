// Test with specific test case:
// cat AdditionalProblems/binarySubsequences/tests/1.in | node AdditionalProblems/binarySubsequences/solution.js

// Test against all test cases with:
// node test AdditionalProblems/binarySubsequences

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const n = parseInt(input.trim(), 10); // Required number of distinct subsequences
  solveProblem(n);
});

function solveProblem(n) {
  console.log('Required number of distinct subsequences (n):', n);
}

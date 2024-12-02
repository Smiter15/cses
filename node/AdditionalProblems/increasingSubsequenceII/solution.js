// Test with specific test case:
// cat AdditionalProblems/increasingSubsequenceII/tests/1.in | node AdditionalProblems/increasingSubsequenceII/solution.js

// Test against all test cases with:
// node test AdditionalProblems/increasingSubsequenceII

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Size of the array
  const array = lines[1].split(' ').map(Number); // Array contents
  solveProblem(n, array);
});

function solveProblem(n, array) {
  console.log('Array Size:', n, '\nArray Contents:', array);
}

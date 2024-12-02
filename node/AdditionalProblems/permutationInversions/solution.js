// Test with specific test case:
// cat AdditionalProblems/permutationInversions/tests/1.in | node AdditionalProblems/permutationInversions/solution.js

// Test against all test cases with:
// node test AdditionalProblems/permutationInversions

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const [n, k] = input.trim().split(' ').map(Number);
  solveProblem(n, k);
});

function solveProblem(n, k) {
  console.log('Array Size:', n, '\nNumber of Inversions:', k);
}

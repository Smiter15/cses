// Test with specific test case:
// cat AdditionalProblems/inverseInversions/tests/1.in | node AdditionalProblems/inverseInversions/solution.js

// Test against all test cases with:
// node test AdditionalProblems/inverseInversions

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const [n, k] = input.trim().split(' ').map(Number); // n: size of permutation, k: required inversions
  solveProblem(n, k);
});

function solveProblem(n, k) {
  console.log('Permutation Size:', n, '\nRequired Inversions:', k);
}

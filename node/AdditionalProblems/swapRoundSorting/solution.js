// Test with specific test case:
// cat AdditionalProblems/swapRoundSorting/tests/1.in | node AdditionalProblems/swapRoundSorting/solution.js

// Test against all test cases with:
// node test AdditionalProblems/swapRoundSorting

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Size of the array
  const permutation = lines[1].split(' ').map(Number); // Permutation of elements
  solveProblem(n, permutation);
});

function solveProblem(n, permutation) {
  console.log('Size of array (n):', n, '\nPermutation:', permutation);
}

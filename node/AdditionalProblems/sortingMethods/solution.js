// Test with specific test case:
// cat AdditionalProblems/sortingMethods/tests/1.in | node AdditionalProblems/sortingMethods/solution.js

// Test against all test cases with:
// node test AdditionalProblems/sortingMethods

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Number of elements in the permutation
  const permutation = lines[1].split(' ').map(Number); // Permutation array
  solveProblem(n, permutation);
});

function solveProblem(n, permutation) {
  console.log('Number of Elements (n):', n, '\nPermutation:', permutation);
}

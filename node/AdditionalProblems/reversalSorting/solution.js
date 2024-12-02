// Test with specific test case:
// cat AdditionalProblems/reversalSorting/tests/1.in | node AdditionalProblems/reversalSorting/solution.js

// Test against all test cases with:
// node test AdditionalProblems/reversalSorting

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Size of the array
  const array = lines[1].split(' ').map(Number); // The permutation array
  solveProblem(n, array);
});

function solveProblem(n, array) {
  console.log('Array size (n):', n, '\nPermutation array:', array);
}

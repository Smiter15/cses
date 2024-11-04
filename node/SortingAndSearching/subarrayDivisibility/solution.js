// Test with specific test case:
// cat SortingAndSearching/SubarrayDivisibility/tests/1.in | node SortingAndSearching/SubarrayDivisibility/solution.js

// Test against all test cases with:
// node test SortingAndSearching/SubarrayDivisibility

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const array = lines[1].split(' ').map(Number);
  solveProblem(n, array);
});

function solveProblem(n, array) {
  console.log("n:", n, "\nArray:", array);
}

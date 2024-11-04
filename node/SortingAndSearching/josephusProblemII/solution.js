// Test with specific test case:
// cat SortingAndSearching/josephusProblemII/tests/1.in | node SortingAndSearching/josephusProblemII/solution.js

// Test against all test cases with:
// node test SortingAndSearching/josephusProblemII

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, k] = lines[0].split(' ').map(Number);
  solveProblem(n, k);
});

function solveProblem(n, k) {
  console.log("n:", n, "\nk:", k);
}

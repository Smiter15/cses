// Test with specific test case:
// cat SortingAndSearching/maximumSubarraySum/tests/1.in | node SortingAndSearching/maximumSubarraySum/solution.js

// Test against all test cases with:
// node test SortingAndSearching/maximumSubarraySum

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const arr = lines[1].split(' ').map(Number);
  solveProblem(n, arr);
});

function solveProblem(n, arr) {
  console.log("n:", n, "\nArray:", arr);
}

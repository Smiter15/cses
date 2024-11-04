// Test with specific test case:
// cat SortingAndSearching/MaximumSubarraySumII/tests/1.in | node SortingAndSearching/MaximumSubarraySumII/solution.js

// Test against all test cases with:
// node test SortingAndSearching/MaximumSubarraySumII

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, a, b] = lines[0].split(' ').map(Number);
  const array = lines[1].split(' ').map(Number);
  solveProblem(n, a, b, array);
});

function solveProblem(n, a, b, array) {
  console.log('n:', n, '\na:', a, '\nb:', b, '\nArray:', array);
}

// Test with specific test case:
// cat SortingAndSearching/SlidingWindowCost/tests/1.in | node SortingAndSearching/SlidingWindowCost/solution.js

// Test against all test cases with:
// node test SortingAndSearching/SlidingWindowCost

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, k] = lines[0].split(' ').map(Number);
  const array = lines[1].split(' ').map(Number);
  solveProblem(n, k, array);
});

function solveProblem(n, k, array) {
  console.log("n:", n, "\nk:", k, "\nArray:", array);
}

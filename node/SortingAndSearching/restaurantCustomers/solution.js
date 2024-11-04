// Test with specific test case:
// cat SortingAndSearching/restaurantCustomers/tests/1.in | node SortingAndSearching/restaurantCustomers/solution.js

// Test against all test cases with:
// node test SortingAndSearching/restaurantCustomers

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const intervals = lines.slice(1).map(line => line.split(' ').map(Number));
  solveProblem(n, intervals);
});

function solveProblem(n, intervals) {
  console.log("n:", n, "\nIntervals:", intervals);
}

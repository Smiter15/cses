// Test with specific test case:
// cat RangeQueries/subarraySumQueries/tests/1.in | node RangeQueries/subarraySumQueries/solution.js

// Test against all test cases with:
// node test RangeQueries/subarraySumQueries

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const array = lines[1].split(' ').map(Number);
  const updates = lines.slice(2).map(line => line.split(' ').map(Number));
  solveProblem(n, m, array, updates);
});

function solveProblem(n, m, array, updates) {
  console.log("n:", n, "\nm:", m, "\nInitial Array:", array, "\nUpdates:", updates);
}

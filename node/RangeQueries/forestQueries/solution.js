// Test with specific test case:
// cat RangeQueries/forestQueries/tests/1.in | node RangeQueries/forestQueries/solution.js

// Test against all test cases with:
// node test RangeQueries/forestQueries

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, q] = lines[0].split(' ').map(Number);
  const grid = lines.slice(1, n + 1);
  const queries = lines.slice(n + 1).map((line) => line.split(' ').map(Number));

  solveProblem(n, q, grid, queries);
});

function solveProblem(n, q, grid, queries) {
  console.log('n:', n, '\nq:', q, '\nGrid:\n', grid.join('\n'), '\nQueries:', queries);
}

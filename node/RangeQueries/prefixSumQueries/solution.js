// Test with specific test case:
// cat RangeQueries/prefixSumQueries/tests/1.in | node RangeQueries/prefixSumQueries/solution.js

// Test against all test cases with:
// node test RangeQueries/prefixSumQueries

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, q] = lines[0].split(' ').map(Number);
  const values = lines[1].split(' ').map(Number);
  const queries = lines.slice(2).map((line) => line.split(' ').map(Number));
  solveProblem(n, q, values, queries);
});

function solveProblem(n, q, values, queries) {
  console.log('n:', n, '\nq:', q, '\nValues:', values, '\nQueries:', queries);
}

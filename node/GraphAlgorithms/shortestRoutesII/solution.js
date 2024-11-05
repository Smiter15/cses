// Test with specific test case:
// cat GraphAlgorithms/shortestRoutesII/tests/1.in | node GraphAlgorithms/shortestRoutesII/solution.js

// Test against all test cases with:
// node test GraphAlgorithms/shortestRoutesII

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m, q] = lines[0].split(' ').map(Number);
  const roads = lines.slice(1, m + 1).map(line => line.split(' ').map(Number));
  const queries = lines.slice(m + 1).map(line => line.split(' ').map(Number));
  solveProblem(n, m, q, roads, queries);
});

function solveProblem(n, m, q, roads, queries) {
  console.log('n:', n, '\nm:', m, '\nq:', q, '\nRoads:', roads, '\nQueries:', queries);
}

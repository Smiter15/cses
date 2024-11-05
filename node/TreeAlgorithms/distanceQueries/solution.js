// Test with specific test case:
// cat TreeAlgorithms/distanceQueries/tests/1.in | node TreeAlgorithms/distanceQueries/solution.js

// Test against all test cases with:
// node test TreeAlgorithms/distanceQueries

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, q] = lines[0].split(' ').map(Number); // Number of nodes and queries
  const edges = lines.slice(1, n).map((line) => line.split(' ').map(Number)); // Tree edges
  const queries = lines.slice(n).map((line) => line.split(' ').map(Number)); // Distance queries
  solveProblem(n, q, edges, queries);
});

function solveProblem(n, q, edges, queries) {
  console.log('n:', n, '\nq:', q, '\nEdges:', edges, '\nQueries:', queries);
}

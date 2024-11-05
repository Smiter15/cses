// Test with specific test case:
// cat TreeAlgorithms/pathQueries/tests/1.in | node TreeAlgorithms/pathQueries/solution.js

// Test against all test cases with:
// node test TreeAlgorithms/pathQueries

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, q] = lines[0].split(' ').map(Number); // Number of nodes and queries
  const values = lines[1].split(' ').map(Number); // Initial values of nodes
  const edges = lines.slice(2, n + 1).map((line) => line.split(' ').map(Number)); // Tree edges
  const queries = lines.slice(n + 1).map((line) => line.split(' ').map(Number)); // Queries

  solveProblem(n, q, values, edges, queries);
});

function solveProblem(n, q, values, edges, queries) {
  console.log('n:', n, '\nq:', q, '\nValues:', values, '\nEdges:', edges, '\nQueries:', queries);
}

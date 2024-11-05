// Test with specific test case:
// cat TreeAlgorithms/treeDistancesII/tests/1.in | node TreeAlgorithms/treeDistancesII/solution.js

// Test against all test cases with:
// node test TreeAlgorithms/treeDistancesII

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Number of nodes
  const edges = lines.slice(1).map((line) => line.split(' ').map(Number)); // List of edges
  solveProblem(n, edges);
});

function solveProblem(n, edges) {
  console.log('n:', n, '\nEdges:', edges);
}

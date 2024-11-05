// Test with specific test case:
// cat TreeAlgorithms/treeDistancesI/tests/1.in | node TreeAlgorithms/treeDistancesI/solution.js

// Test against all test cases with:
// node test TreeAlgorithms/treeDistancesI

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Number of nodes
  const edges = lines.slice(1).map((line) => line.split(' ').map(Number)); // Edges
  solveProblem(n, edges);
});

function solveProblem(n, edges) {
  console.log('n:', n, '\nEdges:', edges);
}

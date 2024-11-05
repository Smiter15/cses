// Test with specific test case:
// cat TreeAlgorithms/findingACentroid/tests/1.in | node TreeAlgorithms/findingACentroid/solution.js

// Test against all test cases with:
// node test TreeAlgorithms/findingACentroid

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Number of nodes
  const edges = lines.slice(1).map((line) => line.split(' ').map(Number)); // Tree edges

  solveProblem(n, edges);
});

function solveProblem(n, edges) {
  console.log('n:', n, '\nEdges:', edges);
}

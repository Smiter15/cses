// Test with specific test case:
// cat TreeAlgorithms/treeDiameter/tests/1.in | node TreeAlgorithms/treeDiameter/solution.js

// Test against all test cases with:
// node test TreeAlgorithms/treeDiameter

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const edges = lines.slice(1).map(line => line.split(' ').map(Number));
  solveProblem(n, edges);
});

function solveProblem(n, edges) {
  console.log("n:", n, "\nEdges:", edges);
}

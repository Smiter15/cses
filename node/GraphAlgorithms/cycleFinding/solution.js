// Test with specific test case:
// cat GraphAlgorithms/cycleFinding/tests/1.in | node GraphAlgorithms/cycleFinding/solution.js

// Test against all test cases with:
// node test GraphAlgorithms/cycleFinding

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const edges = lines.slice(1).map(line => line.split(' ').map(Number));
  solveProblem(n, m, edges);
});

function solveProblem(n, m, edges) {
  console.log("Nodes:", n, "\nEdges:", m, "\nEdge data:", edges);
}

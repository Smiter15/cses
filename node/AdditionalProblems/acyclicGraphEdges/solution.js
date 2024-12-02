// Test with specific test case:
// cat AdditionalProblems/acyclicGraphEdges/tests/1.in | node AdditionalProblems/acyclicGraphEdges/solution.js

// Test against all test cases with:
// node test AdditionalProblems/acyclicGraphEdges

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const edges = lines.slice(1).map((line) => line.split(' ').map(Number));
  solveProblem(n, m, edges);
});

function solveProblem(n, m, edges) {
  console.log('Number of Nodes:', n, '\nNumber of Edges:', m, '\nEdges:', edges);
}

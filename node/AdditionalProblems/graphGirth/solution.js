// Test with specific test case:
// cat AdditionalProblems/graphGirth/tests/1.in | node AdditionalProblems/graphGirth/solution.js

// Test against all test cases with:
// node test AdditionalProblems/graphGirth

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number); // Number of nodes and edges
  const edges = lines.slice(1).map((line) => line.split(' ').map(Number)); // Graph edges
  solveProblem(n, m, edges);
});

function solveProblem(n, m, edges) {
  console.log('Number of Nodes:', n, '\nNumber of Edges:', m, '\nEdges:', edges);
}

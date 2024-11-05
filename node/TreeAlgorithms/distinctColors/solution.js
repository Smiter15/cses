// Test with specific test case:
// cat TreeAlgorithms/distinctColors/tests/1.in | node TreeAlgorithms/distinctColors/solution.js

// Test against all test cases with:
// node test TreeAlgorithms/distinctColors

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Number of nodes
  const colors = lines[1].split(' ').map(Number); // Colors of each node
  const edges = lines.slice(2).map((line) => line.split(' ').map(Number)); // Tree edges

  solveProblem(n, colors, edges);
});

function solveProblem(n, colors, edges) {
  console.log('n:', n, '\nColors:', colors, '\nEdges:', edges);
}

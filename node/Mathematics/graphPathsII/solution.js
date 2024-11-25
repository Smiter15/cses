// Test with specific test case:
// cat Mathematics/graphPathsII/tests/1.in | node Mathematics/graphPathsII/solution.js

// Test against all test cases with:
// node test Mathematics/graphPathsII

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m, k] = lines[0].split(' ').map(Number); // Number of nodes, edges, and path length
  const edges = lines.slice(1).map(line => line.split(' ').map(Number)); // Graph edges with weights

  solveProblem(n, m, k, edges);
});

function solveProblem(n, m, k, edges) {
  console.log('n:', n, '\nm:', m, '\nk:', k, '\nEdges:', edges);
}
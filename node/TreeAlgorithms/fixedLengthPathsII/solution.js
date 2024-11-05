// Test with specific test case:
// cat TreeAlgorithms/fixedLengthPathsII/tests/1.in | node TreeAlgorithms/fixedLengthPathsII/solution.js

// Test against all test cases with:
// node test TreeAlgorithms/fixedLengthPathsII

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, k1, k2] = lines[0].split(' ').map(Number); // Number of nodes, minimum and maximum path lengths
  const edges = lines.slice(1).map((line) => line.split(' ').map(Number)); // Tree edges

  solveProblem(n, k1, k2, edges);
});

function solveProblem(n, k1, k2, edges) {
  console.log('n:', n, '\nk1:', k1, '\nk2:', k2, '\nEdges:', edges);
}

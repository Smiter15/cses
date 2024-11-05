// Test with specific test case:
// cat GraphAlgorithms/messageRoute/tests/1.in | node GraphAlgorithms/messageRoute/solution.js

// Test against all test cases with:
// node test GraphAlgorithms/messageRoute

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const connections = lines.slice(1).map(line => line.split(' ').map(Number));
  solveProblem(n, m, connections);
});

function solveProblem(n, m, connections) {
  console.log('n:', n, '\nm:', m, '\nConnections:', connections);
}

// Test with specific test case:
// cat GraphAlgorithms/knightsTour/tests/1.in | node GraphAlgorithms/knightsTour/solution.js

// Test against all test cases with:
// node test GraphAlgorithms/knightsTour

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [x, y] = lines[0].split(' ').map(Number);
  solveProblem(x, y);
});

function solveProblem(x, y) {
  console.log("Starting position:", x, y);
}

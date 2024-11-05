// Test with specific test case:
// cat GraphAlgorithms/planetsCycles/tests/1.in | node GraphAlgorithms/planetsCycles/solution.js

// Test against all test cases with:
// node test GraphAlgorithms/planetsCycles

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const teleporters = lines[1].split(' ').map(Number);
  solveProblem(n, teleporters);
});

function solveProblem(n, teleporters) {
  console.log("Planets:", n, "\nTeleporters:", teleporters);
}

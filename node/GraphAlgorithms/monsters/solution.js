// Test with specific test case:
// cat GraphAlgorithms/monsters/tests/1.in | node GraphAlgorithms/monsters/solution.js

// Test against all test cases with:
// node test GraphAlgorithms/monsters

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const grid = lines.slice(1);
  solveProblem(n, m, grid);
});

function solveProblem(n, m, grid) {
  console.log('n:', n, '\nm:', m, '\nGrid:\n', grid.join('\n'));
}

// Test with specific test case:
// cat GraphAlgorithms/countingRooms/tests/1.in | node GraphAlgorithms/countingRooms/solution.js

// Test against all test cases with:
// node test GraphAlgorithms/countingRooms

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
  console.log('Grid Size:', n, 'x', m, '\nGrid:\n', grid.join('\n'));
}

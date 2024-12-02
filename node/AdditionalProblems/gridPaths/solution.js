// Test with specific test case:
// cat AdditionalProblems/gridPaths/tests/1.in | node AdditionalProblems/gridPaths/solution.js

// Test against all test cases with:
// node test AdditionalProblems/gridPaths

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number); // Grid size and number of traps
  const traps = lines.slice(1).map((line) => line.split(' ').map(Number)); // Trap positions
  solveProblem(n, m, traps);
});

function solveProblem(n, m, traps) {
  console.log('Grid size (n):', n, '\nNumber of traps (m):', m, '\nTrap positions:', traps);
}

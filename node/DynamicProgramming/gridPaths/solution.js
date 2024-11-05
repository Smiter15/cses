// Test with specific test case:
// cat DynamicProgramming/gridPaths/tests/1.in | node DynamicProgramming/gridPaths/solution.js

// Test against all test cases with:
// node test DynamicProgramming/gridPaths

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const grid = lines.slice(1);
  solveProblem(n, grid);
});

function solveProblem(n, grid) {
  console.log("n:", n, "\nGrid:\n", grid.join("\n"));
}

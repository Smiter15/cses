// Test with specific test case:
// cat DynamicProgramming/countingTowers/tests/1.in | node DynamicProgramming/countingTowers/solution.js

// Test against all test cases with:
// node test DynamicProgramming/countingTowers

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const t = parseInt(lines[0], 10);
  const heights = lines.slice(1).map(Number);
  solveProblem(t, heights);
});

function solveProblem(t, heights) {
  console.log("t:", t, "\nHeights:", heights);
}

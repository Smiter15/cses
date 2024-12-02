// Test with specific test case:
// cat AdditionalProblems/advertisement/tests/1.in | node AdditionalProblems/advertisement/solution.js

// Test against all test cases with:
// node test AdditionalProblems/advertisement

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const heights = lines[1].split(' ').map(Number);
  solveProblem(n, heights);
});

function solveProblem(n, heights) {
  console.log('Number of Boards:', n, '\nHeights:', heights);
}

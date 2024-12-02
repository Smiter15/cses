// Test with specific test case:
// cat AdditionalProblems/fillingTrominos/tests/1.in | node AdditionalProblems/fillingTrominos/solution.js

// Test against all test cases with:
// node test AdditionalProblems/fillingTrominos

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const t = parseInt(lines[0], 10); // Number of test cases
  const tests = lines.slice(1).map((line) => line.split(' ').map(Number)); // Test cases
  solveProblem(t, tests);
});

function solveProblem(t, tests) {
  console.log('Number of tests:', t, '\nTests:', tests);
}

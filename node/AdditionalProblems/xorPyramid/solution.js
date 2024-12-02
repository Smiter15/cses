// Test with specific test case:
// cat AdditionalProblems/xorPyramid/tests/1.in | node AdditionalProblems/xorPyramid/solution.js

// Test against all test cases with:
// node test AdditionalProblems/xorPyramid

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Size of the pyramid
  const array = lines[1].split(' ').map(Number); // Bottom row of the pyramid
  solveProblem(n, array);
});

function solveProblem(n, array) {
  console.log('Pyramid Size:', n, '\nBottom Row:', array);
}

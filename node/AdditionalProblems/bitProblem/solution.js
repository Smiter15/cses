// Test with specific test case:
// cat AdditionalProblems/bitProblem/tests/1.in | node AdditionalProblems/bitProblem/solution.js

// Test against all test cases with:
// node test AdditionalProblems/bitProblem

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Number of elements
  const array = lines[1].split(' ').map(Number); // Array elements
  solveProblem(n, array);
});

function solveProblem(n, array) {
  console.log('Number of elements (n):', n, '\nArray:', array);
}

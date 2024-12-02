// Test with specific test case:
// cat AdditionalProblems/pruferCode/tests/1.in | node AdditionalProblems/pruferCode/solution.js

// Test against all test cases with:
// node test AdditionalProblems/pruferCode

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const pruferCode = lines[1].split(' ').map(Number);
  solveProblem(n, pruferCode);
});

function solveProblem(n, pruferCode) {
  console.log('Number of Nodes:', n, '\nPrüfer Code:', pruferCode);
}

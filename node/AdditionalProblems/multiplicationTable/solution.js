// Test with specific test case:
// cat AdditionalProblems/multiplicationTable/tests/1.in | node AdditionalProblems/multiplicationTable/solution.js

// Test against all test cases with:
// node test AdditionalProblems/multiplicationTable

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const n = parseInt(input.trim(), 10);
  solveProblem(n);
});

function solveProblem(n) {
  console.log('Table Size:', n);
}

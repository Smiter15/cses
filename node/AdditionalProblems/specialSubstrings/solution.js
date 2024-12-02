// Test with specific test case:
// cat AdditionalProblems/specialSubstrings/tests/1.in | node AdditionalProblems/specialSubstrings/solution.js

// Test against all test cases with:
// node test AdditionalProblems/specialSubstrings

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const s = input.trim();
  solveProblem(s);
});

function solveProblem(s) {
  console.log('Input String:', s);
}

// Test with specific test case:
// cat AdditionalProblems/stringTransform/tests/1.in | node AdditionalProblems/stringTransform/solution.js

// Test against all test cases with:
// node test AdditionalProblems/stringTransform

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const transformedString = input.trim(); // Transformed string input
  solveProblem(transformedString);
});

function solveProblem(transformedString) {
  console.log('Transformed String:', transformedString);
}

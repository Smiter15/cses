// Test with specific test case:
// cat AdditionalProblems/letterPairMoveGame/tests/1.in | node AdditionalProblems/letterPairMoveGame/solution.js

// Test against all test cases with:
// node test AdditionalProblems/letterPairMoveGame

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Number of pairs
  const initialState = lines[1]; // Initial string configuration
  solveProblem(n, initialState);
});

function solveProblem(n, initialState) {
  console.log('Number of Pairs (n):', n, '\nInitial State:', initialState);
}

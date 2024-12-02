// Test with specific test case:
// cat AdditionalProblems/bitInversions/tests/1.in | node AdditionalProblems/bitInversions/solution.js

// Test against all test cases with:
// node test AdditionalProblems/bitInversions

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const bitString = lines[0]; // Initial bit string
  const m = parseInt(lines[1], 10); // Number of changes
  const changes = lines[2].split(' ').map(Number); // Changes
  solveProblem(bitString, m, changes);
});

function solveProblem(bitString, m, changes) {
  console.log('Initial Bit String:', bitString, '\nNumber of Changes:', m, '\nChanges:', changes);
}

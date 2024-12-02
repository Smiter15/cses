// Test with specific test case:
// cat AdditionalProblems/stickDivisions/tests/1.in | node AdditionalProblems/stickDivisions/solution.js

// Test against all test cases with:
// node test AdditionalProblems/stickDivisions

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [x, n] = lines[0].split(' ').map(Number); // Stick length and number of divisions
  const lengths = lines[1].split(' ').map(Number); // Desired stick lengths
  solveProblem(x, n, lengths);
});

function solveProblem(x, n, lengths) {
  console.log('Stick length (x):', x, '\nNumber of divisions (n):', n, '\nDesired lengths:', lengths);
}

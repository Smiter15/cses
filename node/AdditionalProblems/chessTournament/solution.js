// Test with specific test case:
// cat AdditionalProblems/chessTournament/tests/1.in | node AdditionalProblems/chessTournament/solution.js

// Test against all test cases with:
// node test AdditionalProblems/chessTournament

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const games = lines[1].split(' ').map(Number);
  solveProblem(n, games);
});

function solveProblem(n, games) {
  console.log('Number of Players:', n, '\nDesired Games:', games);
}

// Test with specific test case:
// cat AdditionalProblems/stackWeights/tests/1.in | node AdditionalProblems/stackWeights/solution.js

// Test against all test cases with:
// node test AdditionalProblems/stackWeights

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Number of coins
  const moves = lines.slice(1).map((line) => line.split(' ').map(Number)); // Moves: [coin, stack]
  solveProblem(n, moves);
});

function solveProblem(n, moves) {
  console.log('Number of Coins:', n, '\nMoves:', moves);
}

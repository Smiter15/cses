// Test with specific test case:
// cat Mathematics/stickGame/tests/1.in | node Mathematics/stickGame/solution.js

// Test against all test cases with:
// node test Mathematics/stickGame

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, k] = lines[0].split(' ').map(Number); // Number of sticks and moves
  const moves = lines[1].split(' ').map(Number); // Allowed moves

  solveProblem(n, k, moves);
});

function solveProblem(n, k, moves) {
  console.log('n:', n, '\nk:', k, '\nMoves:', moves);
}

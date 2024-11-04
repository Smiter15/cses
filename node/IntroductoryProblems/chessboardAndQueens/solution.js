// Test with specific test case:
// cat IntroductoryProblems/chessboardAndQueens/tests/1.in | node IntroductoryProblems/chessboardAndQueens/solution.js

// Test against all test cases with:
// node test IntroductoryProblems/chessboardAndQueens

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const board = lines.map(line => line.split(''));
  solveProblem(board);
});

function solveProblem(board) {
  console.log("Chessboard layout:");
  board.forEach(row => console.log(row.join('')));
}

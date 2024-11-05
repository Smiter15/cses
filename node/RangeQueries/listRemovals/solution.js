// Test with specific test case:
// cat RangeQueries/listRemovals/tests/1.in | node RangeQueries/listRemovals/solution.js

// Test against all test cases with:
// node test RangeQueries/listRemovals

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const list = lines[1].split(' ').map(Number);
  const positions = lines[2].split(' ').map(Number);
  solveProblem(n, list, positions);
});

function solveProblem(n, list, positions) {
  console.log("n:", n, "\nList:", list, "\nPositions:", positions);
}

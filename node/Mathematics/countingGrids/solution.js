// Test with specific test case:
// cat Mathematics/countingGrids/tests/1.in | node Mathematics/countingGrids/solution.js

// Test against all test cases with:
// node test Mathematics/countingGrids

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const n = parseInt(input.trim(), 10); // Size of the grid

  solveProblem(n);
});

function solveProblem(n) {
  console.log('n:', n);
}

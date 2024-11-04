// Test with specific test case:
// cat SortingAndSearching/ferrisWheel/tests/1.in | node SortingAndSearching/ferrisWheel/solution.js

// Test against all test cases with:
// node test SortingAndSearching/ferrisWheel

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, x] = lines[0].split(' ').map(Number);
  const weights = lines[1].split(' ').map(Number);
  solveProblem(n, x, weights);
});

function solveProblem(n, x, weights) {
  console.log("Input n and x:", n, x, "\nWeights:", weights);
}

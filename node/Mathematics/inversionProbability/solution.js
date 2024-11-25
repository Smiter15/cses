// Test with specific test case:
// cat Mathematics/inversionProbability/tests/1.in | node Mathematics/inversionProbability/solution.js

// Test against all test cases with:
// node test Mathematics/inversionProbability

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = Number(lines[0]); // Size of the array
  const ranges = lines[1].split(' ').map(Number); // Range of possible values for each position

  solveProblem(n, ranges);
});

function solveProblem(n, ranges) {
  console.log('n:', n, '\nRanges:', ranges);
}

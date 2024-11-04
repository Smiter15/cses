// Test with specific test case:
// cat IntroductoryProblems/appleDivision/tests/1.in | node IntroductoryProblems/appleDivision/solution.js

// Test against all test cases with:
// node test IntroductoryProblems/appleDivision

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const weights = lines[1].split(' ').map(Number);
  solveProblem(n, weights);
});

function solveProblem(n, weights) {
  console.log("n:", n, "\nWeights:", weights);
}

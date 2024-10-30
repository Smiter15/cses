// Test with specific test case:
// cat IntroductoryProblems/coinPiles/tests/1.in | node IntroductoryProblems/coinPiles/solution.js

// Test against all test cases with:
// node test IntroductoryProblems/coinPiles

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const queries = lines.slice(1).map(line => line.split(' ').map(Number));
  solveProblem(n, queries);
});

function solveProblem(n, queries) {
  console.log("Input of n pairs of values and arrays of pairs:");
  queries.forEach(query => console.log(query));
}

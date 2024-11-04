// Test with specific test case:
// cat IntroductoryProblems/digitQueries/tests/1.in | node IntroductoryProblems/digitQueries/solution.js

// Test against all test cases with:
// node test IntroductoryProblems/digitQueries

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const q = parseInt(lines[0], 10);
  const queries = lines.slice(1).map(Number);
  solveProblem(q, queries);
});

function solveProblem(q, queries) {
  console.log("Number of queries:", q, "\nQueries:", queries);
}

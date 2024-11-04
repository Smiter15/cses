// Test with specific test case:
// cat IntroductoryProblems/numberSpiral/tests/1.in | node IntroductoryProblems/numberSpiral/solution.js

// Test against all test cases with:
// node test IntroductoryProblems/numberSpiral

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const t = parseInt(lines[0], 10);
  const queries = lines.slice(1).map(line => line.split(' ').map(Number));
  solveProblem(t, queries);
});

function solveProblem(t, queries) {
  console.log("Number of test cases:", t, "\nQueries:", queries);
}

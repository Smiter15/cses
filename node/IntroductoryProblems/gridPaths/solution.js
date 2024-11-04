// Test with specific test case:
// cat IntroductoryProblems/gridPaths/tests/1.in | node IntroductoryProblems/gridPaths/solution.js

// Test against all test cases with:
// node test IntroductoryProblems/gridPaths

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const pathDescription = lines[0];
  solveProblem(pathDescription);
});

function solveProblem(pathDescription) {
  console.log("Path description:", pathDescription);
}

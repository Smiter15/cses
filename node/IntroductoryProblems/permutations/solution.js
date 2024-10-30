// Test with specific test case:
// cat IntroductoryProblems/permutations/tests/1.in | node IntroductoryProblems/permutations/solution.js

// Test against all test cases with:
// node test IntroductoryProblems/permutations

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const number = parseInt(lines[0], 10);
  solveProblem(number);
});

function solveProblem(number) {
  console.log("Input is single number:", number);
}

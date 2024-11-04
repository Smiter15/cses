// Test with specific test case:
// cat IntroductoryProblems/repetitions/tests/1.in | node IntroductoryProblems/repetitions/solution.js

// Test against all test cases with:
// node test IntroductoryProblems/repetitions

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const sequence = lines[0];
  solveProblem(sequence);
});

function solveProblem(sequence) {
  console.log("DNA sequence:", sequence);
}

// Test in the terminal with:
// echo "AAAAAAAAAA" | node IntroductoryProblems/repetitions/solution.js

// Test against test cases with:
// node test IntroductoryProblems/repetitions

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  solveProblem(lines[0]);
});

function solveProblem(string) {
  console.log('input', string);
}

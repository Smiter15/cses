// Test in the terminal with:
// echo -e "5\n5 2 1 3" | node IntroductoryProblems/missingNumber/solution.js

// Test against test cases with:
// node test IntroductoryProblems/missingNumber

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  solveProblem(n, lines[1]);
});

function solveProblem(n, numbers) {
  const arr = numbers.split(' ').map(Number);

  console.log('input', n, arr);
}

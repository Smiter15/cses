// Test with specific test case:
// cat IntroductoryProblems/weirdAlgorithm/tests/1.in | node IntroductoryProblems/weirdAlgorithm/solution.js

// Test against all test cases with:
// node test IntroductoryProblems/weirdAlgorithm

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

function solveProblem(n) {
  const result = [];

  while (n !== 1) {
    result.push(n);
    n = n % 2 === 0 ? n / 2 : n * 3 + 1;
  }
  result.push(1);

  console.log(result.join(' '));
}

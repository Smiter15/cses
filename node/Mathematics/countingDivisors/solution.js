// Test with specific test case:
// cat Mathematics/countingDivisors/tests/1.in | node Mathematics/countingDivisors/solution.js

// Test against all test cases with:
// node test Mathematics/countingDivisors

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Number of integers
  const numbers = lines.slice(1).map(Number); // Array of integers

  solveProblem(n, numbers);
});

function solveProblem(n, numbers) {
  console.log('n:', n, '\nNumbers:', numbers);
}

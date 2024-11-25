// Test with specific test case:
// cat Mathematics/countingCoprimePairs/tests/1.in | node Mathematics/countingCoprimePairs/solution.js

// Test against all test cases with:
// node test Mathematics/countingCoprimePairs

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Number of elements
  const numbers = lines[1].split(' ').map(Number); // List of numbers

  solveProblem(n, numbers);
});

function solveProblem(n, numbers) {
  console.log('n:', n, '\nNumbers:', numbers);
}

// Test with specific test case:
// cat Mathematics/grundysGame/tests/1.in | node Mathematics/grundysGame/solution.js

// Test against all test cases with:
// node test Mathematics/grundysGame

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const t = Number(lines[0]); // Number of test cases
  const heaps = lines.slice(1).map(Number); // Number of coins in each heap

  solveProblem(t, heaps);
});

function solveProblem(t, heaps) {
  console.log('t:', t, '\nHeaps:', heaps);
}

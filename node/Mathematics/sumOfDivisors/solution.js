// Test with specific test case:
// cat Mathematics/sumOfDivisors/tests/1.in | node Mathematics/sumOfDivisors/solution.js

// Test against all test cases with:
// node test Mathematics/sumOfDivisors

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = BigInt(lines[0]); // Input value as BigInt to handle large numbers

  solveProblem(n);
});

function solveProblem(n) {
  console.log('n:', n.toString());
}

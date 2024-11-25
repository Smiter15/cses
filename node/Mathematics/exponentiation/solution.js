// Test with specific test case:
// cat Mathematics/exponentiation/tests/1.in | node Mathematics/exponentiation/solution.js

// Test against all test cases with:
// node test Mathematics/exponentiation

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Number of calculations
  const queries = lines.slice(1).map((line) => line.split(' ').map(Number)); // [a, b] queries

  solveProblem(n, queries);
});

function solveProblem(n, queries) {
  console.log('n:', n, '\nQueries:', queries);
}

// Test with specific test case:
// cat Mathematics/divisorAnalysis/tests/1.in | node Mathematics/divisorAnalysis/solution.js

// Test against all test cases with:
// node test Mathematics/divisorAnalysis

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Number of parts in the prime factorization
  const factors = lines.slice(1).map(line => line.split(' ').map(Number)); // Prime factors and their powers

  solveProblem(n, factors);
});

function solveProblem(n, factors) {
  console.log('n:', n, '\nFactors:', factors);
}

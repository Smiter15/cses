// Test with specific test case:
// cat GraphAlgorithms/schoolDance/tests/1.in | node GraphAlgorithms/schoolDance/solution.js

// Test against all test cases with:
// node test GraphAlgorithms/schoolDance

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m, k] = lines[0].split(' ').map(Number);
  const pairs = lines.slice(1).map(line => line.split(' ').map(Number));
  solveProblem(n, m, k, pairs);
});

function solveProblem(n, m, k, pairs) {
  console.log("Boys:", n, "\nGirls:", m, "\nPotential pairs:", k, "\nPair data:", pairs);
}

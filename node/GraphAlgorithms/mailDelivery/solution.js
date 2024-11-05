// Test with specific test case:
// cat GraphAlgorithms/mailDelivery/tests/1.in | node GraphAlgorithms/mailDelivery/solution.js

// Test against all test cases with:
// node test GraphAlgorithms/mailDelivery

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const streets = lines.slice(1).map(line => line.split(' ').map(Number));
  solveProblem(n, m, streets);
});

function solveProblem(n, m, streets) {
  console.log("Crossings:", n, "\nStreets:", m, "\nStreet data:", streets);
}

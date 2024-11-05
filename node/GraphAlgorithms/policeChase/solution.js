// Test with specific test case:
// cat GraphAlgorithms/policeChase/tests/1.in | node GraphAlgorithms/policeChase/solution.js

// Test against all test cases with:
// node test GraphAlgorithms/policeChase

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

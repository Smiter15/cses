// Test with specific test case:
// cat GraphAlgorithms/roadConstruction/tests/1.in | node GraphAlgorithms/roadConstruction/solution.js

// Test against all test cases with:
// node test GraphAlgorithms/roadConstruction

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const newRoads = lines.slice(1).map(line => line.split(' ').map(Number));
  solveProblem(n, m, newRoads);
});

function solveProblem(n, m, newRoads) {
  console.log("Cities:", n, "\nRoads:", m, "\nNew road data:", newRoads);
}

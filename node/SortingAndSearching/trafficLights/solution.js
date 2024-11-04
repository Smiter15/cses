// Test with specific test case:
// cat SortingAndSearching/trafficLights/tests/1.in | node SortingAndSearching/trafficLights/solution.js

// Test against all test cases with:
// node test SortingAndSearching/trafficLights

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [x, n] = lines[0].split(' ').map(Number);
  const positions = lines[1].split(' ').map(Number);
  solveProblem(x, n, positions);
});

function solveProblem(x, n, positions) {
  console.log("x:", x, "\nn:", n, "\nPositions:", positions);
}

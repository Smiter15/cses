// Test with specific test case:
// cat GraphAlgorithms/buildingRoads/tests/1.in | node GraphAlgorithms/buildingRoads/solution.js

// Test against all test cases with:
// node test GraphAlgorithms/buildingRoads

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const roads = lines.slice(1).map(line => line.split(' ').map(Number));
  solveProblem(n, m, roads);
});

function solveProblem(n, m, roads) {
  console.log('Number of cities:', n, '\nNumber of roads:', m, '\nRoads:', roads);
}

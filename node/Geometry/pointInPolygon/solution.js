// Test with specific test case:
// cat Geometry/pointInPolygon/tests/1.in | node Geometry/pointInPolygon/solution.js

// Test against all test cases with:
// node test Geometry/pointInPolygon

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number); // Number of vertices and points
  const polygon = lines.slice(1, n + 1).map((line) => line.split(' ').map(Number)); // Polygon vertices
  const points = lines.slice(n + 1).map((line) => line.split(' ').map(Number)); // Points to check
  solveProblem(n, m, polygon, points);
});

function solveProblem(n, m, polygon, points) {
  console.log('Number of vertices:', n);
  console.log('Polygon:', polygon);
  console.log('Number of points:', m);
  console.log('Points:', points);
}

// Test with specific test case:
// cat Geometry/polygonLatticePoints/tests/1.in | node Geometry/polygonLatticePoints/solution.js

// Test against all test cases with:
// node test Geometry/polygonLatticePoints

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Number of vertices
  const vertices = lines.slice(1).map((line) => line.split(' ').map(Number)); // Polygon vertices
  solveProblem(n, vertices);
});

function solveProblem(n, vertices) {
  console.log('Number of vertices:', n);
  console.log('Vertices:', vertices);
}

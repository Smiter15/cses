// Test with specific test case:
// cat Geometry/polygonArea/tests/1.in | node Geometry/polygonArea/solution.js

// Test against all test cases with:
// node test Geometry/polygonArea

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const vertices = lines.slice(1).map((line) => line.split(' ').map(Number));
  solveProblem(n, vertices);
});

function solveProblem(n, vertices) {
  console.log('Number of vertices:', n);
  console.log('Vertices:', vertices);
}

// Test with specific test case:
// cat Geometry/minimumEuclideanDistance/tests/1.in | node Geometry/minimumEuclideanDistance/solution.js

// Test against all test cases with:
// node test Geometry/minimumEuclideanDistance

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Number of points
  const points = lines.slice(1).map((line) => line.split(' ').map(Number)); // Points
  solveProblem(n, points);
});

function solveProblem(n, points) {
  console.log('Number of points:', n);
  console.log('Points:', points);
}

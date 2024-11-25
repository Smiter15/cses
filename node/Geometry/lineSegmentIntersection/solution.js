// Test with specific test case:
// cat Geometry/lineSegmentIntersection/tests/1.in | node Geometry/lineSegmentIntersection/solution.js

// Test against all test cases with:
// node test Geometry/lineSegmentIntersection

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const t = parseInt(lines[0], 10);
  const tests = lines.slice(1).map((line) => line.split(' ').map(Number));
  solveProblem(t, tests);
});

function solveProblem(t, tests) {
  console.log('Number of tests:', t);
  console.log('Tests:', tests);
}

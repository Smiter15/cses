// Test with specific test case:
// cat AdditionalProblems/intersectionPoints/tests/1.in | node AdditionalProblems/intersectionPoints/solution.js

// Test against all test cases with:
// node test AdditionalProblems/intersectionPoints

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Number of line segments
  const segments = lines.slice(1).map((line) => line.split(' ').map(Number)); // Line segments
  solveProblem(n, segments);
});

function solveProblem(n, segments) {
  console.log('Number of Line Segments:', n, '\nSegments:', segments);
}

// Test with specific test case:
// cat AdditionalProblems/areaOfRectangles/tests/1.in | node AdditionalProblems/areaOfRectangles/solution.js

// Test against all test cases with:
// node test AdditionalProblems/areaOfRectangles

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Number of rectangles
  const rectangles = lines.slice(1).map((line) => line.split(' ').map(Number)); // Rectangle coordinates
  solveProblem(n, rectangles);
});

function solveProblem(n, rectangles) {
  console.log('Number of rectangles (n):', n, '\nRectangles:', rectangles);
}

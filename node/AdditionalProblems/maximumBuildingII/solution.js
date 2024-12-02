// Test with specific test case:
// cat AdditionalProblems/maximumBuildingII/tests/1.in | node AdditionalProblems/maximumBuildingII/solution.js

// Test against all test cases with:
// node test AdditionalProblems/maximumBuildingII

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number); // Grid size
  const forest = lines.slice(1).map((line) => line.trim().split('')); // Forest grid
  solveProblem(n, m, forest);
});

function solveProblem(n, m, forest) {
  console.log('Grid size:', n, 'x', m, '\nForest:', forest);
}

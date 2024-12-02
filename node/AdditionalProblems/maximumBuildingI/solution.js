// Test with specific test case:
// cat AdditionalProblems/maximumBuildingI/tests/1.in | node AdditionalProblems/maximumBuildingI/solution.js

// Test against all test cases with:
// node test AdditionalProblems/maximumBuildingI

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number); // Dimensions of the forest
  const forest = lines.slice(1); // Forest grid
  solveProblem(n, m, forest);
});

function solveProblem(n, m, forest) {
  console.log('Rows (n):', n, '\nColumns (m):', m, '\nForest Grid:\n', forest.join('\n'));
}

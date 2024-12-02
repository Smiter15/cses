// Test with specific test case:
// cat AdditionalProblems/creatingOffices/tests/1.in | node AdditionalProblems/creatingOffices/solution.js

// Test against all test cases with:
// node test AdditionalProblems/creatingOffices

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, d] = lines[0].split(' ').map(Number); // Number of cities and minimum distance
  const roads = lines.slice(1).map((line) => line.split(' ').map(Number)); // Roads
  solveProblem(n, d, roads);
});

function solveProblem(n, d, roads) {
  console.log('Number of cities (n):', n, '\nMinimum distance (d):', d, '\nRoads:', roads);
}

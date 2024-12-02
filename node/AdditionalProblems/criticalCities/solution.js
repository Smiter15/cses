// Test with specific test case:
// cat AdditionalProblems/criticalCities/tests/1.in | node AdditionalProblems/criticalCities/solution.js

// Test against all test cases with:
// node test AdditionalProblems/criticalCities

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number); // Number of cities and flights
  const connections = lines.slice(1).map((line) => line.split(' ').map(Number)); // Flight connections
  solveProblem(n, m, connections);
});

function solveProblem(n, m, connections) {
  console.log('Number of cities (n):', n, '\nNumber of flights (m):', m, '\nConnections:', connections);
}

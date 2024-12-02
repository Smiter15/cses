// Test with specific test case:
// cat AdditionalProblems/newFlightRoutes/tests/1.in | node AdditionalProblems/newFlightRoutes/solution.js

// Test against all test cases with:
// node test AdditionalProblems/newFlightRoutes

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number); // Number of cities and flights
  const flights = lines.slice(1).map((line) => line.split(' ').map(Number)); // Existing flights
  solveProblem(n, m, flights);
});

function solveProblem(n, m, flights) {
  console.log('Number of cities (n):', n, '\nNumber of flights (m):', m, '\nExisting flights:', flights);
}

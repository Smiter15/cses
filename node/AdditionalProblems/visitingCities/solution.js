// Test with specific test case:
// cat AdditionalProblems/visitingCities/tests/1.in | node AdditionalProblems/visitingCities/solution.js

// Test against all test cases with:
// node test AdditionalProblems/visitingCities

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number); // Cities and flights
  const flights = lines.slice(1).map((line) => line.split(' ').map(Number)); // Flight details
  solveProblem(n, m, flights);
});

function solveProblem(n, m, flights) {
  console.log('Cities:', n, '\nFlights:', flights);
}

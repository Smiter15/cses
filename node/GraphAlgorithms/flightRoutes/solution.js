// Test with specific test case:
// cat GraphAlgorithms/flightRoutes/tests/1.in | node GraphAlgorithms/flightRoutes/solution.js

// Test against all test cases with:
// node test GraphAlgorithms/flightRoutes

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m, k] = lines[0].split(' ').map(Number);
  const flights = lines.slice(1).map(line => line.split(' ').map(Number));
  solveProblem(n, m, k, flights);
});

function solveProblem(n, m, k, flights) {
  console.log("Cities:", n, "\nFlights:", m, "\nk:", k, "\nFlight data:", flights);
}

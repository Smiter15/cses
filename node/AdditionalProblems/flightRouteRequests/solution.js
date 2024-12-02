// Test with specific test case:
// cat AdditionalProblems/flightRouteRequests/tests/1.in | node AdditionalProblems/flightRouteRequests/solution.js

// Test against all test cases with:
// node test AdditionalProblems/flightRouteRequests

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number); // Number of cities and requests
  const requests = lines.slice(1).map((line) => line.split(' ').map(Number)); // Requested routes
  solveProblem(n, m, requests);
});

function solveProblem(n, m, requests) {
  console.log('Number of cities (n):', n, '\nNumber of requests (m):', m, '\nRequests:', requests);
}

// Test with specific test case:
// cat AdditionalProblems/networkBreakdown/tests/1.in | node AdditionalProblems/networkBreakdown/solution.js

// Test against all test cases with:
// node test AdditionalProblems/networkBreakdown

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m, k] = lines[0].split(' ').map(Number); // Computers, connections, and breakdowns
  const connections = lines.slice(1, 1 + m).map((line) => line.split(' ').map(Number)); // Initial connections
  const breakdowns = lines.slice(1 + m).map((line) => line.split(' ').map(Number)); // Breakdown events
  solveProblem(n, m, k, connections, breakdowns);
});

function solveProblem(n, m, k, connections, breakdowns) {
  console.log('Computers:', n, '\nConnections:', connections, '\nBreakdowns:', breakdowns);
}

// Test with specific test case:
// cat AdditionalProblems/networkRenovation/tests/1.in | node AdditionalProblems/networkRenovation/solution.js

// Test against all test cases with:
// node test AdditionalProblems/networkRenovation

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Number of computers
  const connections = lines.slice(1).map((line) => line.split(' ').map(Number)); // Existing connections
  solveProblem(n, connections);
});

function solveProblem(n, connections) {
  console.log('Number of Computers:', n, '\nExisting Connections:', connections);
}

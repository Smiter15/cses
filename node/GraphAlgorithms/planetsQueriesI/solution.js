// Test with specific test case:
// cat GraphAlgorithms/planetsQueriesI/tests/1.in | node GraphAlgorithms/planetsQueriesI/solution.js

// Test against all test cases with:
// node test GraphAlgorithms/planetsQueriesI

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, q] = lines[0].split(' ').map(Number);
  const teleporters = lines[1].split(' ').map(Number);
  const queries = lines.slice(2).map(line => line.split(' ').map(Number));
  solveProblem(n, q, teleporters, queries);
});

function solveProblem(n, q, teleporters, queries) {
  console.log("Planets:", n, "\nQueries:", q, "\nTeleporters:", teleporters, "\nQuery data:", queries);
}

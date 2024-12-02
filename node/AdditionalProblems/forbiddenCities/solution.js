// Test with specific test case:
// cat AdditionalProblems/forbiddenCities/tests/1.in | node AdditionalProblems/forbiddenCities/solution.js

// Test against all test cases with:
// node test AdditionalProblems/forbiddenCities

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m, q] = lines[0].split(' ').map(Number); // Number of cities, roads, and queries
  const roads = lines.slice(1, m + 1).map((line) => line.split(' ').map(Number)); // Roads
  const queries = lines.slice(m + 1).map((line) => line.split(' ').map(Number)); // Queries
  solveProblem(n, m, q, roads, queries);
});

function solveProblem(n, m, q, roads, queries) {
  console.log(
    'Number of cities (n):',
    n,
    '\nNumber of roads (m):',
    m,
    '\nNumber of queries (q):',
    q,
    '\nRoads:',
    roads,
    '\nQueries:',
    queries
  );
}

// Test with specific test case:
// cat TreeAlgorithms/companyQueriesII/tests/1.in | node TreeAlgorithms/companyQueriesII/solution.js

// Test against all test cases with:
// node test TreeAlgorithms/companyQueriesII

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, q] = lines[0].split(' ').map(Number); // Number of employees and queries
  const bosses = lines[1].split(' ').map(Number); // Boss for each employee from 2 to n
  const queries = lines.slice(2).map((line) => line.split(' ').map(Number)); // List of queries
  solveProblem(n, q, bosses, queries);
});

function solveProblem(n, q, bosses, queries) {
  console.log('n:', n, '\nq:', q, '\nBosses:', bosses, '\nQueries:', queries);
}

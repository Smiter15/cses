// Test with specific test case:
// cat Mathematics/josephusQueries/tests/1.in | node Mathematics/josephusQueries/solution.js

// Test against all test cases with:
// node test Mathematics/josephusQueries

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const q = parseInt(lines[0], 10); // Number of queries
  const queries = lines.slice(1).map((line) => line.split(' ').map(Number)); // [n, k] queries

  solveProblem(q, queries);
});

function solveProblem(q, queries) {
  console.log('q:', q, '\nQueries:', queries);
}

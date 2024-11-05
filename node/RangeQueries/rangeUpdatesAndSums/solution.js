// Test with specific test case:
// cat RangeQueries/rangeUpdatesAndSums/tests/1.in | node RangeQueries/rangeUpdatesAndSums/solution.js

// Test against all test cases with:
// node test RangeQueries/rangeUpdatesAndSums

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, q] = lines[0].split(' ').map(Number); // n for array size, q for number of queries
  const array = lines[1].split(' ').map(Number); // Initial array values
  const queries = lines.slice(2).map((line) => line.split(' ').map(Number)); // Remaining lines are queries
  solveProblem(n, q, array, queries);
});

function solveProblem(n, q, array, queries) {
  console.log('n:', n, '\nq:', q, '\nArray:', array, '\nQueries:', queries);
}

// Test with specific test case:
// cat RangeQueries/rangeQueriesAndCopies/tests/1.in | node RangeQueries/rangeQueriesAndCopies/solution.js

// Test against all test cases with:
// node test RangeQueries/rangeQueriesAndCopies

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, q] = lines[0].split(' ').map(Number); // n for array size, q for number of queries
  const initialArray = lines[1].split(' ').map(Number); // Initial array
  const queries = lines.slice(2).map((line) => line.split(' ').map(Number)); // List of queries
  solveProblem(n, q, initialArray, queries);
});

function solveProblem(n, q, initialArray, queries) {
  console.log('n:', n, '\nq:', q, '\nInitial Array:', initialArray, '\nQueries:', queries);
}

// Test with specific test case:
// cat AdditionalProblems/movieFestivalQueries/tests/1.in | node AdditionalProblems/movieFestivalQueries/solution.js

// Test against all test cases with:
// node test AdditionalProblems/movieFestivalQueries

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, q] = lines[0].split(' ').map(Number);
  const movies = lines.slice(1, n + 1).map((line) => line.split(' ').map(Number));
  const queries = lines.slice(n + 1).map((line) => line.split(' ').map(Number));
  solveProblem(n, q, movies, queries);
});

function solveProblem(n, q, movies, queries) {
  console.log('Number of Movies:', n, '\nNumber of Queries:', q);
  console.log('Movies:', movies);
  console.log('Queries:', queries);
}

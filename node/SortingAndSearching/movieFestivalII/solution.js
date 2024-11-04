// Test with specific test case:
// cat SortingAndSearching/MovieFestivalII/tests/1.in | node SortingAndSearching/MovieFestivalII/solution.js

// Test against all test cases with:
// node test SortingAndSearching/MovieFestivalII

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, k] = lines[0].split(' ').map(Number);
  const movies = lines.slice(1).map(line => line.split(' ').map(Number));
  solveProblem(n, k, movies);
});

function solveProblem(n, k, movies) {
  console.log("n:", n, "\nk:", k, "\nMovies:", movies);
}

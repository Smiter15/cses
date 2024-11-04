// Test with specific test case:
// cat SortingAndSearching/readingBooks/tests/1.in | node SortingAndSearching/readingBooks/solution.js

// Test against all test cases with:
// node test SortingAndSearching/readingBooks

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const times = lines[1].split(' ').map(Number);
  solveProblem(n, times);
});

function solveProblem(n, times) {
  console.log("n:", n, "\nTimes:", times);
}

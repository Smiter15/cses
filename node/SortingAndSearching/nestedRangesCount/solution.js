// Test with specific test case:
// cat SortingAndSearching/nestedRangesCount/tests/1.in | node SortingAndSearching/nestedRangesCount/solution.js

// Test against all test cases with:
// node test SortingAndSearching/nestedRangesCount

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const ranges = lines.slice(1).map(line => line.split(' ').map(Number));
  solveProblem(n, ranges);
});

function solveProblem(n, ranges) {
  console.log("n:", n, "\nRanges:", ranges);
}

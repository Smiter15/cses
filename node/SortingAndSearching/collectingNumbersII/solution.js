// Test with specific test case:
// cat SortingAndSearching/collectingNumbersII/tests/1.in | node SortingAndSearching/collectingNumbersII/solution.js

// Test against all test cases with:
// node test SortingAndSearching/collectingNumbersII

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const arr = lines[1].split(' ').map(Number);
  const swaps = lines.slice(2).map(line => line.split(' ').map(Number));
  solveProblem(n, m, arr, swaps);
});

function solveProblem(n, m, arr, swaps) {
  console.log("n:", n, "\nm:", m, "\nArray:", arr, "\nSwaps:", swaps);
}

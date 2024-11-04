// Test with specific test case:
// cat SortingAndSearching/distinctNumbers/tests/1.in | node SortingAndSearching/distinctNumbers/solution.js

// Test against all test cases with:
// node test SortingAndSearching/distinctNumbers

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const numbers = lines[1].split(' ').map(Number);
  solveProblem(n, numbers);
});

function solveProblem(n, numbers) {
  console.log("Input n:", n, "\nNumbers:", numbers);
}

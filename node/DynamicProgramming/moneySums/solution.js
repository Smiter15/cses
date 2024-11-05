// Test with specific test case:
// cat DynamicProgramming/moneySums/tests/1.in | node DynamicProgramming/moneySums/solution.js

// Test against all test cases with:
// node test DynamicProgramming/moneySums

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const coins = lines[1].split(' ').map(Number);
  solveProblem(n, coins);
});

function solveProblem(n, coins) {
  console.log("n:", n, "\nCoins:", coins);
}

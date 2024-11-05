// Test with specific test case:
// cat DynamicProgramming/coinCombinationsII/tests/1.in | node DynamicProgramming/coinCombinationsII/solution.js

// Test against all test cases with:
// node test DynamicProgramming/coinCombinationsII

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, x] = lines[0].split(' ').map(Number);
  const coins = lines[1].split(' ').map(Number);
  solveProblem(n, x, coins);
});

function solveProblem(n, x, coins) {
  console.log("n:", n, "\nx:", x, "\nCoins:", coins);
}

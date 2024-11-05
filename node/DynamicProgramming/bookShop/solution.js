// Test with specific test case:
// cat DynamicProgramming/bookShop/tests/1.in | node DynamicProgramming/bookShop/solution.js

// Test against all test cases with:
// node test DynamicProgramming/bookShop

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, x] = lines[0].split(' ').map(Number);
  const prices = lines[1].split(' ').map(Number);
  const pages = lines[2].split(' ').map(Number);
  solveProblem(n, x, prices, pages);
});

function solveProblem(n, x, prices, pages) {
  console.log("n:", n, "\nx:", x, "\nPrices:", prices, "\nPages:", pages);
}

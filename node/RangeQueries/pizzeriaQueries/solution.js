// Test with specific test case:
// cat RangeQueries/pizzeriaQueries/tests/1.in | node RangeQueries/pizzeriaQueries/solution.js

// Test against all test cases with:
// node test RangeQueries/pizzeriaQueries

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, q] = lines[0].split(' ').map(Number);
  const prices = lines[1].split(' ').map(Number);
  const queries = lines.slice(2).map(line => line.split(' ').map((v, i) => i === 0 ? v : Number(v)));
  solveProblem(n, q, prices, queries);
});

function solveProblem(n, q, prices, queries) {
  console.log("n:", n, "\nq:", q, "\nPrices:", prices, "\nQueries:", queries);
}

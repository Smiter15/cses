// Test with specific test case:
// cat AdditionalProblems/missingCoinSumQueries/tests/1.in | node AdditionalProblems/missingCoinSumQueries/solution.js

// Test against all test cases with:
// node test AdditionalProblems/missingCoinSumQueries

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, q] = lines[0].split(' ').map(Number); // Number of coins and queries
  const coins = lines[1].split(' ').map(Number); // Coin values
  const queries = lines.slice(2).map((line) => line.split(' ').map(Number)); // Queries
  solveProblem(n, q, coins, queries);
});

function solveProblem(n, q, coins, queries) {
  console.log('Number of coins:', n, '\nNumber of queries:', q, '\nCoins:', coins, '\nQueries:', queries);
}

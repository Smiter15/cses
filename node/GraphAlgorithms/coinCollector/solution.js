// Test with specific test case:
// cat GraphAlgorithms/coinCollector/tests/1.in | node GraphAlgorithms/coinCollector/solution.js

// Test against all test cases with:
// node test GraphAlgorithms/coinCollector

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const coins = lines[1].split(' ').map(Number);
  const tunnels = lines.slice(2).map(line => line.split(' ').map(Number));
  solveProblem(n, m, coins, tunnels);
});

function solveProblem(n, m, coins, tunnels) {
  console.log("Rooms:", n, "\nTunnels:", m, "\nCoins:", coins, "\nTunnel data:", tunnels);
}

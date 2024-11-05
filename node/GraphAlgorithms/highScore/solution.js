// Test with specific test case:
// cat GraphAlgorithms/highScore/tests/1.in | node GraphAlgorithms/highScore/solution.js

// Test against all test cases with:
// node test GraphAlgorithms/highScore

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const tunnels = lines.slice(1).map(line => line.split(' ').map(Number));
  solveProblem(n, m, tunnels);
});

function solveProblem(n, m, tunnels) {
  console.log("Rooms:", n, "\nTunnels:", m, "\nTunnel data:", tunnels);
}

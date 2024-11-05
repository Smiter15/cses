// Test with specific test case:
// cat TreeAlgorithms/subordinates/tests/1.in | node TreeAlgorithms/subordinates/solution.js

// Test against all test cases with:
// node test TreeAlgorithms/subordinates

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Number of employees
  const bosses = lines[1].split(' ').map(Number); // Bosses for employees 2 to n
  solveProblem(n, bosses);
});

function solveProblem(n, bosses) {
  console.log('n:', n, '\nBosses:', bosses);
}

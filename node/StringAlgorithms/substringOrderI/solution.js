// Test with specific test case:
// cat StringAlgorithms/substringOrderI/tests/1.in | node StringAlgorithms/substringOrderI/solution.js

// Test against all test cases with:
// node test StringAlgorithms/substringOrderI

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const string = lines[0]; // Input string
  const k = parseInt(lines[1]); // Kth smallest substring

  solveProblem(string, k);
});

function solveProblem(string, k) {
  console.log('String:', string, '\nK:', k);
}

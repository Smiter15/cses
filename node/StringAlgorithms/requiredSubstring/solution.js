// Test with specific test case:
// cat StringAlgorithms/requiredSubstring/tests/1.in | node StringAlgorithms/requiredSubstring/solution.js

// Test against all test cases with:
// node test StringAlgorithms/requiredSubstring

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0]); // Length of final string
  const pattern = lines[1]; // Given pattern

  solveProblem(n, pattern);
});

function solveProblem(n, pattern) {
  console.log('n:', n, '\nPattern:', pattern);
}

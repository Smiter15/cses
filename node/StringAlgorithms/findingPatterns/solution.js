// Test with specific test case:
// cat StringAlgorithms/findingPatterns/tests/1.in | node StringAlgorithms/findingPatterns/solution.js

// Test against all test cases with:
// node test StringAlgorithms/findingPatterns

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const string = lines[0]; // Main string
  const k = parseInt(lines[1]); // Number of patterns
  const patterns = lines.slice(2); // List of patterns

  solveProblem(string, k, patterns);
});

function solveProblem(string, k, patterns) {
  console.log('String:', string, '\nk:', k, '\nPatterns:', patterns);
}

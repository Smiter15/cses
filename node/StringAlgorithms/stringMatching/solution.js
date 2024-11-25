// Test with specific test case:
// cat StringAlgorithms/stringMatching/tests/1.in | node StringAlgorithms/stringMatching/solution.js

// Test against all test cases with:
// node test StringAlgorithms/stringMatching

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const text = lines[0]; // The main string
  const pattern = lines[1]; // The pattern to match

  solveProblem(text, pattern);
});

function solveProblem(text, pattern) {
  console.log('Text:', text.slice(0, 50), '...'); // Display first 50 for brevity
  console.log('Pattern:', pattern);
}

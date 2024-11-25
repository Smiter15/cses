// Test with specific test case:
// cat StringAlgorithms/substringDistribution/tests/1.in | node StringAlgorithms/substringDistribution/solution.js

// Test against all test cases with:
// node test StringAlgorithms/substringDistribution

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const string = input.trim(); // Input string

  solveProblem(string);
});

function solveProblem(string) {
  console.log('String:', string);
}

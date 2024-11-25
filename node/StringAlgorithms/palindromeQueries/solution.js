// Test with specific test case:
// cat StringAlgorithms/palindromeQueries/tests/1.in | node StringAlgorithms/palindromeQueries/solution.js

// Test against all test cases with:
// node test StringAlgorithms/palindromeQueries

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number); // Length of string and number of operations
  const string = lines[1]; // Initial string
  const operations = lines.slice(2).map(line => line.split(' ')); // List of operations

  solveProblem(n, m, string, operations);
});

function solveProblem(n, m, string, operations) {
  console.log('n:', n, '\nm:', m, '\nString:', string, '\nOperations:', operations);
}

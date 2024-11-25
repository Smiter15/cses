// Test with specific test case:
// cat Mathematics/diceProbability/tests/1.in | node Mathematics/diceProbability/solution.js

// Test against all test cases with:
// node test Mathematics/diceProbability

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const [n, a, b] = input.trim().split(' ').map(Number); // Number of throws, lower bound, upper bound

  solveProblem(n, a, b);
});

function solveProblem(n, a, b) {
  console.log('n:', n, '\na:', a, '\nb:', b);
}

// Test with specific test case:
// cat DynamicProgramming/countingNumbers/tests/1.in | node DynamicProgramming/countingNumbers/solution.js

// Test against all test cases with:
// node test DynamicProgramming/countingNumbers

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [a, b] = lines[0].split(' ').map(BigInt);
  solveProblem(a, b);
});

function solveProblem(a, b) {
  console.log("a:", a.toString(), "\nb:", b.toString());
}

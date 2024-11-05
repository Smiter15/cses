// Test with specific test case:
// cat DynamicProgramming/increasingSubsequence/tests/1.in | node DynamicProgramming/increasingSubsequence/solution.js

// Test against all test cases with:
// node test DynamicProgramming/increasingSubsequence

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const list = lines[1].split(' ').map(Number);
  solveProblem(n, list);
});

function solveProblem(n, list) {
  console.log("n:", n, "\nList:", list);
}

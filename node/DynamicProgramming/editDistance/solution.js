// Test with specific test case:
// cat DynamicProgramming/editDistance/tests/1.in | node DynamicProgramming/editDistance/solution.js

// Test against all test cases with:
// node test DynamicProgramming/editDistance

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const str1 = lines[0];
  const str2 = lines[1];
  solveProblem(str1, str2);
});

function solveProblem(str1, str2) {
  console.log("String 1:", str1, "\nString 2:", str2);
}

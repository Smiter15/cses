// Test with specific test case:
// cat Mathematics/commonDivisors/tests/1.in | node Mathematics/commonDivisors/solution.js

// Test against all test cases with:
// node test Mathematics/commonDivisors

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Size of the array
  const array = lines[1].split(' ').map(Number); // Array contents

  solveProblem(n, array);
});

function solveProblem(n, array) {
  console.log('n:', n, '\nArray:', array);
}

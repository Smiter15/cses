// Test with specific test case:
// cat Mathematics/creatingStringsII/tests/1.in | node Mathematics/creatingStringsII/solution.js

// Test against all test cases with:
// node test Mathematics/creatingStringsII

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const str = input.trim(); // The input string

  solveProblem(str);
});

function solveProblem(str) {
  console.log('String:', str);
}

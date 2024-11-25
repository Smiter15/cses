// Test with specific test case:
// cat Mathematics/christmasParty/tests/1.in | node Mathematics/christmasParty/solution.js

// Test against all test cases with:
// node test Mathematics/christmasParty

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const n = parseInt(input.trim(), 10); // Number of children

  solveProblem(n);
});

function solveProblem(n) {
  console.log('n:', n);
}

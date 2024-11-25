// Test with specific test case:
// cat Mathematics/bracketSequencesI/tests/1.in | node Mathematics/bracketSequencesI/solution.js

// Test against all test cases with:
// node test Mathematics/bracketSequencesI

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const n = parseInt(input.trim(), 10); // Length of the bracket sequence

  solveProblem(n);
});

function solveProblem(n) {
  console.log('n:', n);
}

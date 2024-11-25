// Test with specific test case:
// cat Mathematics/bracketSequencesII/tests/1.in | node Mathematics/bracketSequencesII/solution.js

// Test against all test cases with:
// node test Mathematics/bracketSequencesII

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Total length of the sequence
  const prefix = lines[1]; // Prefix of the sequence

  solveProblem(n, prefix);
});

function solveProblem(n, prefix) {
  console.log('n:', n, '\nPrefix:', prefix);
}

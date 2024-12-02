// Test with specific test case:
// cat AdditionalProblems/listOfSums/tests/1.in | node AdditionalProblems/listOfSums/solution.js

// Test against all test cases with:
// node test AdditionalProblems/listOfSums

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Size of list A
  const sums = lines[1].split(' ').map(Number); // Pairwise sums of list A
  solveProblem(n, sums);
});

function solveProblem(n, sums) {
  console.log('Size of List A (n):', n, '\nPairwise Sums (B):', sums);
}

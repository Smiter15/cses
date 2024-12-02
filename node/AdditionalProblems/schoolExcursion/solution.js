// Test with specific test case:
// cat AdditionalProblems/schoolExcursion/tests/1.in | node AdditionalProblems/schoolExcursion/solution.js

// Test against all test cases with:
// node test AdditionalProblems/schoolExcursion

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number); // Number of children and wishes
  const wishes = lines.slice(1).map((line) => line.split(' ').map(Number)); // Children's wishes
  solveProblem(n, m, wishes);
});

function solveProblem(n, m, wishes) {
  console.log('Number of children (n):', n, '\nNumber of wishes (m):', m, '\nWishes:', wishes);
}

// Test with specific test case:
// cat AdditionalProblems/twoStacksSorting/tests/1.in | node AdditionalProblems/twoStacksSorting/solution.js

// Test against all test cases with:
// node test AdditionalProblems/twoStacksSorting

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Number of elements
  const inputList = lines[1].split(' ').map(Number); // Input list
  solveProblem(n, inputList);
});

function solveProblem(n, inputList) {
  console.log('Number of elements (n):', n, '\nInput list:', inputList);
}

// Test with specific test case:
// cat AdditionalProblems/monotoneSubsequences/tests/1.in | node AdditionalProblems/monotoneSubsequences/solution.js

// Test against all test cases with:
// node test AdditionalProblems/monotoneSubsequences

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const t = parseInt(lines[0], 10); // Number of test cases
  const testCases = lines.slice(1).map((line) => line.split(' ').map(Number)); // Each test case contains n and k
  solveProblem(t, testCases);
});

function solveProblem(t, testCases) {
  console.log('Number of Test Cases:', t, '\nTest Cases:', testCases);
}

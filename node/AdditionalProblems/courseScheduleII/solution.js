// Test with specific test case:
// cat AdditionalProblems/courseScheduleII/tests/1.in | node AdditionalProblems/courseScheduleII/solution.js

// Test against all test cases with:
// node test AdditionalProblems/courseScheduleII

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number); // Number of courses and prerequisites
  const prerequisites = lines.slice(1).map((line) => line.split(' ').map(Number)); // Prerequisite pairs
  solveProblem(n, m, prerequisites);
});

function solveProblem(n, m, prerequisites) {
  console.log('Number of courses:', n, '\nNumber of prerequisites:', m, '\nPrerequisites:', prerequisites);
}

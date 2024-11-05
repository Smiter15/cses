// Test with specific test case:
// cat GraphAlgorithms/courseSchedule/tests/1.in | node GraphAlgorithms/courseSchedule/solution.js

// Test against all test cases with:
// node test GraphAlgorithms/courseSchedule

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const requirements = lines.slice(1).map(line => line.split(' ').map(Number));
  solveProblem(n, m, requirements);
});

function solveProblem(n, m, requirements) {
  console.log("Courses:", n, "\nRequirements:", m, "\nRequirement data:", requirements);
}

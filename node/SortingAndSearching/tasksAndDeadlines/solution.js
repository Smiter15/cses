// Test with specific test case:
// cat SortingAndSearching/tasksAndDeadlines/tests/1.in | node SortingAndSearching/tasksAndDeadlines/solution.js

// Test against all test cases with:
// node test SortingAndSearching/tasksAndDeadlines

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const tasks = lines.slice(1).map(line => line.split(' ').map(Number));
  solveProblem(n, tasks);
});

function solveProblem(n, tasks) {
  console.log("n:", n, "\nTasks:", tasks);
}

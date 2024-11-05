// Test with specific test case:
// cat DynamicProgramming/projects/tests/1.in | node DynamicProgramming/projects/solution.js

// Test against all test cases with:
// node test DynamicProgramming/projects

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const projects = lines.slice(1).map(line => line.split(' ').map(Number));
  solveProblem(n, projects);
});

function solveProblem(n, projects) {
  console.log("n:", n, "\nProjects:\n", projects.map(p => p.join(' ')).join('\n'));
}

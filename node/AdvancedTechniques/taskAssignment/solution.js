// Test with specific test case:
// cat AdvancedTechniques/taskAssignment/tests/1.in | node AdvancedTechniques/taskAssignment/solution.js

// Test against all test cases with:
// node test AdvancedTechniques/taskAssignment

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', (data) => {
  input += data;
});

process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  const n = Number(lines[0]); // Number of employees and tasks
  const costs = lines.slice(1).map((line) => line.split(' ').map(Number)); // Cost matrix

  solveProblem(n, costs);
});

function solveProblem(n, costs) {
  console.log('n:', n, '\nCosts:', costs);
}

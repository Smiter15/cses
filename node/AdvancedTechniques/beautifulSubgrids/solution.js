// Test with specific test case:
// cat AdvancedTechniques/beautifulSubgrids/tests/1.in | node AdvancedTechniques/beautifulSubgrids/solution.js

// Test against all test cases with:
// node test AdvancedTechniques/beautifulSubgrids

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', (data) => {
  input += data;
});

process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0]);
  const grid = lines.slice(1).map((row) => row.split('').map(Number));

  solveProblem(n, grid);
});

function solveProblem(n, grid) {
  console.log('n:', n, '\nGrid:', grid);
}

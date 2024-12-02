// Test with specific test case:
// cat AdvancedTechniques/housesAndSchools/tests/1.in | node AdvancedTechniques/housesAndSchools/solution.js

// Test against all test cases with:
// node test AdvancedTechniques/housesAndSchools

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', (data) => {
  input += data;
});

process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  const [n, k] = lines[0].split(' ').map(Number);
  const children = lines[1].split(' ').map(Number);

  solveProblem(n, k, children);
});

function solveProblem(n, k, children) {
  console.log('n:', n, '\nk:', k, '\nChildren:', children);
}

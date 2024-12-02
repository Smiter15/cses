// Test with specific test case:
// cat AdvancedTechniques/necessaryRoads/tests/1.in | node AdvancedTechniques/necessaryRoads/solution.js

// Test against all test cases with:
// node test AdvancedTechniques/necessaryRoads

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', (data) => {
  input += data;
});

process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const roads = lines.slice(1).map((line) => line.split(' ').map(Number));

  solveProblem(n, m, roads);
});

function solveProblem(n, m, roads) {
  console.log('n:', n, '\nm:', m, '\nRoads:', roads);
}

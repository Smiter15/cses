// Test with specific test case:
// cat AdvancedTechniques/monsterGameII/tests/1.in | node AdvancedTechniques/monsterGameII/solution.js

// Test against all test cases with:
// node test AdvancedTechniques/monsterGameII

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', (data) => {
  input += data;
});

process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  const [n, x] = lines[0].split(' ').map(Number);
  const strengths = lines[1].split(' ').map(Number);
  const factors = lines[2].split(' ').map(Number);

  solveProblem(n, x, strengths, factors);
});

function solveProblem(n, x, strengths, factors) {
  console.log('n:', n, '\nx:', x, '\nStrengths:', strengths, '\nFactors:', factors);
}

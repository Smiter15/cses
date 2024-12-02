// Test with specific test case:
// cat AdvancedTechniques/substringReversals/tests/1.in | node AdvancedTechniques/substringReversals/solution.js

// Test against all test cases with:
// node test AdvancedTechniques/substringReversals

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', (data) => {
  input += data;
});

process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const str = lines[1];
  const operations = lines.slice(2).map((line) => line.split(' ').map(Number));

  solveProblem(n, m, str, operations);
});

function solveProblem(n, m, str, operations) {
  console.log('n:', n, '\nm:', m, '\nString:', str, '\nOperations:', operations);
}

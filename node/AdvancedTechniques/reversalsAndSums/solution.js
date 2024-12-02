// Test with specific test case:
// cat AdvancedTechniques/reversalsAndSums/tests/1.in | node AdvancedTechniques/reversalsAndSums/solution.js

// Test against all test cases with:
// node test AdvancedTechniques/reversalsAndSums

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', (data) => {
  input += data;
});

process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const array = lines[1].split(' ').map(Number);
  const operations = lines.slice(2).map((line) => line.split(' ').map(Number));

  solveProblem(n, m, array, operations);
});

function solveProblem(n, m, array, operations) {
  console.log('n:', n, '\nm:', m, '\nArray:', array, '\nOperations:', operations);
}

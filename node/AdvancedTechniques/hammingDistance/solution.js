// Test with specific test case:
// cat AdvancedTechniques/hammingDistance/tests/1.in | node AdvancedTechniques/hammingDistance/solution.js

// Test against all test cases with:
// node test AdvancedTechniques/hammingDistance

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', (data) => {
  input += data;
});

process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  const [n, k] = lines[0].split(' ').map(Number);
  const bitStrings = lines.slice(1);

  solveProblem(n, k, bitStrings);
});

function solveProblem(n, k, bitStrings) {
  console.log('n:', n, '\nk:', k, '\nBit Strings:', bitStrings);
}

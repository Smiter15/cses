// Test with specific test case:
// cat AdvancedTechniques/oneBitPositions/tests/1.in | node AdvancedTechniques/oneBitPositions/solution.js

// Test against all test cases with:
// node test AdvancedTechniques/oneBitPositions

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', (data) => {
  input += data;
});

process.stdin.on('end', () => {
  const binaryString = input.trim(); // Binary string

  solveProblem(binaryString);
});

function solveProblem(binaryString) {
  console.log('Binary String:', binaryString);
}

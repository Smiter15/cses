// Test with specific test case:
// cat AdvancedTechniques/subarraySquares/tests/1.in | node AdvancedTechniques/subarraySquares/solution.js

// Test against all test cases with:
// node test AdvancedTechniques/subarraySquares

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', (data) => {
  input += data;
});

process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  const [n, k] = lines[0].split(' ').map(Number);
  const elements = lines[1].split(' ').map(Number);

  solveProblem(n, k, elements);
});

function solveProblem(n, k, elements) {
  console.log('n:', n, '\nk:', k, '\nElements:', elements);
}

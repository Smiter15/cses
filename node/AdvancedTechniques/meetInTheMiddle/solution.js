// Test with specific test case:
// cat AdvancedTechniques/meetInTheMiddle/tests/1.in | node AdvancedTechniques/meetInTheMiddle/solution.js

// Test against all test cases with:
// node test AdvancedTechniques/meetInTheMiddle

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', (data) => {
  input += data;
});

process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  const [n, x] = lines[0].split(' ').map(Number);
  const array = lines[1].split(' ').map(Number);

  solveProblem(n, x, array);
});

function solveProblem(n, x, array) {
  console.log('n:', n, '\nx:', x, '\nArray:', array);
}

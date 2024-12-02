// Test with specific test case:
// cat AdvancedTechniques/knuthDivision/tests/1.in | node AdvancedTechniques/knuthDivision/solution.js

// Test against all test cases with:
// node test AdvancedTechniques/knuthDivision

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', (data) => {
  input += data;
});

process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  const n = Number(lines[0]); // Size of the array
  const elements = lines[1].split(' ').map(Number); // Array contents

  solveProblem(n, elements);
});

function solveProblem(n, elements) {
  console.log('n:', n, '\nElements:', elements);
}

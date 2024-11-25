// Test with specific test case:
// cat Mathematics/stairGame/tests/1.in | node Mathematics/stairGame/solution.js

// Test against all test cases with:
// node test Mathematics/stairGame

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const t = Number(lines[0]); // Number of test cases
  const testCases = [];
  let index = 1;

  for (let i = 0; i < t; i++) {
    const n = Number(lines[index]); // Number of stairs
    const balls = lines[index + 1].split(' ').map(Number); // Number of balls on each stair
    testCases.push({ n, balls });
    index += 2;
  }

  solveProblem(t, testCases);
});

function solveProblem(t, testCases) {
  console.log('t:', t, '\nTest Cases:', testCases);
}

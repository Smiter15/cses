// Test with specific test case:
// cat Mathematics/nimGameII/tests/1.in | node Mathematics/nimGameII/solution.js

// Test against all test cases with:
// node test Mathematics/nimGameII

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
    const n = Number(lines[index]); // Number of heaps
    const heaps = lines[index + 1].split(' ').map(Number); // Number of sticks in each heap
    testCases.push({ n, heaps });
    index += 2;
  }

  solveProblem(t, testCases);
});

function solveProblem(t, testCases) {
  console.log('t:', t, '\nTest Cases:', testCases);
}

// Test with specific test case:
// cat AdditionalProblems/treeIsomorphismII/tests/1.in | node AdditionalProblems/treeIsomorphismII/solution.js

// Test against all test cases with:
// node test AdditionalProblems/treeIsomorphismII

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const t = parseInt(lines[0], 10); // Number of test cases
  const tests = [];
  let index = 1;

  for (let i = 0; i < t; i++) {
    const n = parseInt(lines[index], 10); // Number of nodes
    const tree1 = lines.slice(index + 1, index + n).map((line) => line.split(' ').map(Number)); // First tree edges
    const tree2 = lines.slice(index + n, index + 2 * n - 1).map((line) => line.split(' ').map(Number)); // Second tree edges
    tests.push({ n, tree1, tree2 });
    index += 2 * n - 1;
  }

  solveProblem(t, tests);
});

function solveProblem(t, tests) {
  console.log('Number of tests (t):', t, '\nTests:', tests);
}

// Test with specific test case:
// cat AdditionalProblems/treeIsomorphismI/tests/1.in | node AdditionalProblems/treeIsomorphismI/solution.js

// Test against all test cases with:
// node test AdditionalProblems/treeIsomorphismI

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const t = parseInt(lines[0], 10); // Number of test cases
  let index = 1;

  const tests = [];
  for (let i = 0; i < t; i++) {
    const n = parseInt(lines[index], 10); // Number of nodes in both trees
    index++;
    const tree1 = [];
    for (let j = 0; j < n - 1; j++) {
      tree1.push(lines[index++].split(' ').map(Number));
    }
    const tree2 = [];
    for (let j = 0; j < n - 1; j++) {
      tree2.push(lines[index++].split(' ').map(Number));
    }
    tests.push({ n, tree1, tree2 });
  }

  solveProblem(t, tests);
});

function solveProblem(t, tests) {
  console.log('Number of tests (t):', t, '\nTests:', tests);
}

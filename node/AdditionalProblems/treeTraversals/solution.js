// Test with specific test case:
// cat AdditionalProblems/treeTraversals/tests/1.in | node AdditionalProblems/treeTraversals/solution.js

// Test against all test cases with:
// node test AdditionalProblems/treeTraversals

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const preorder = lines[1].split(' ').map(Number);
  const inorder = lines[2].split(' ').map(Number);
  solveProblem(n, preorder, inorder);
});

function solveProblem(n, preorder, inorder) {
  console.log('Number of Nodes:', n, '\nPreorder Traversal:', preorder, '\nInorder Traversal:', inorder);
}

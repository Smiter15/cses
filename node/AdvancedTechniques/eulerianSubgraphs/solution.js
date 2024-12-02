// Test with specific test case:
// cat AdvancedTechniques/eulerianSubgraphs/tests/1.in | node AdvancedTechniques/eulerianSubgraphs/solution.js

// Test against all test cases with:
// node test AdvancedTechniques/eulerianSubgraphs

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', (data) => {
  input += data;
});

process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const edges = lines.slice(1).map((line) => line.split(' ').map(Number));

  solveProblem(n, m, edges);
});

function solveProblem(n, m, edges) {
  console.log('n:', n, '\nm:', m, '\nEdges:', edges);
}

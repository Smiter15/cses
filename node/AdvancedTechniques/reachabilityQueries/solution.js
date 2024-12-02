// Test with specific test case:
// cat AdvancedTechniques/reachabilityQueries/tests/1.in | node AdvancedTechniques/reachabilityQueries/solution.js

// Test against all test cases with:
// node test AdvancedTechniques/reachabilityQueries

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', (data) => {
  input += data;
});

process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  const [n, m, q] = lines[0].split(' ').map(Number);
  const edges = lines.slice(1, m + 1).map((line) => line.split(' ').map(Number));
  const queries = lines.slice(m + 1).map((line) => line.split(' ').map(Number));

  solveProblem(n, m, q, edges, queries);
});

function solveProblem(n, m, q, edges, queries) {
  console.log('n:', n, '\nm:', m, '\nq:', q, '\nEdges:', edges, '\nQueries:', queries);
}

// Test with specific test case:
// cat AdvancedTechniques/dynamicConnectivity/tests/1.in | node AdvancedTechniques/dynamicConnectivity/solution.js

// Test against all test cases with:
// node test AdvancedTechniques/dynamicConnectivity

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', (data) => {
  input += data;
});

process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  const [n, m, k] = lines[0].split(' ').map(Number); // Number of nodes, edges, and events
  const edges = lines.slice(1, m + 1).map((line) => line.split(' ').map(Number)); // Initial edges
  const events = lines.slice(m + 1).map((line) => {
    const [t, a, b] = line.split(' ').map(Number);
    return { t, a, b }; // Event type and nodes
  });

  solveProblem(n, m, k, edges, events);
});

function solveProblem(n, m, k, edges, events) {
  console.log('n:', n, '\nm:', m, '\nk:', k, '\nEdges:', edges, '\nEvents:', events);
}

// Test with specific test case:
// cat AdvancedTechniques/newRoadsQueries/tests/1.in | node AdvancedTechniques/newRoadsQueries/solution.js

// Test against all test cases with:
// node test AdvancedTechniques/newRoadsQueries

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', (data) => {
  input += data;
});

process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  const [n, m, q] = lines[0].split(' ').map(Number); // Number of cities, roads, and queries
  const roads = lines.slice(1, m + 1).map((line) => line.split(' ').map(Number)); // Roads to be built
  const queries = lines.slice(m + 1).map((line) => line.split(' ').map(Number)); // Queries about city pairs

  solveProblem(n, m, q, roads, queries);
});

function solveProblem(n, m, q, roads, queries) {
  console.log('n:', n, '\nm:', m, '\nq:', q, '\nRoads:', roads, '\nQueries:', queries);
}

// Test with specific test case:
// cat AdvancedTechniques/parcelDelivery/tests/1.in | node AdvancedTechniques/parcelDelivery/solution.js

// Test against all test cases with:
// node test AdvancedTechniques/parcelDelivery

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', (data) => {
  input += data;
});

process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  const [n, m, k] = lines[0].split(' ').map(Number); // Cities, routes, and parcels
  const routes = lines.slice(1).map((line) => line.split(' ').map(Number)); // Routes: a, b, r, c

  solveProblem(n, m, k, routes);
});

function solveProblem(n, m, k, routes) {
  console.log('n:', n, '\nm:', m, '\nk:', k, '\nRoutes:', routes);
}

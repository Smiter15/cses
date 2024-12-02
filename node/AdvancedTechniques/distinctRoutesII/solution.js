// Test with specific test case:
// cat AdvancedTechniques/distinctRoutesII/tests/1.in | node AdvancedTechniques/distinctRoutesII/solution.js

// Test against all test cases with:
// node test AdvancedTechniques/distinctRoutesII

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', (data) => {
  input += data;
});

process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  const [n, m, k] = lines[0].split(' ').map(Number); // Rooms, teleporters, and days
  const teleporters = lines.slice(1).map((line) => line.split(' ').map(Number)); // Teleporters: a, b

  solveProblem(n, m, k, teleporters);
});

function solveProblem(n, m, k, teleporters) {
  console.log('n:', n, '\nm:', m, '\nk:', k, '\nTeleporters:', teleporters);
}

// Test with specific test case:
// cat AdvancedTechniques/applesAndBananas/tests/1.in | node AdvancedTechniques/applesAndBananas/solution.js

// Test against all test cases with:
// node test AdvancedTechniques/applesAndBananas

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', (data) => {
  input += data;
});

process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  const [k, n, m] = lines[0].split(' ').map(Number); // Number of weights, apples, and bananas
  const apples = lines[1].split(' ').map(Number); // Weights of apples
  const bananas = lines[2].split(' ').map(Number); // Weights of bananas

  solveProblem(k, n, m, apples, bananas);
});

function solveProblem(k, n, m, apples, bananas) {
  console.log('k:', k, '\nn:', n, '\nm:', m, '\nApples:', apples, '\nBananas:', bananas);
}

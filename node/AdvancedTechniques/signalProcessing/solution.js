// Test with specific test case:
// cat AdvancedTechniques/signalProcessing/tests/1.in | node AdvancedTechniques/signalProcessing/solution.js

// Test against all test cases with:
// node test AdvancedTechniques/signalProcessing

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', (data) => {
  input += data;
});

process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number); // Lengths of the signal and mask
  const signal = lines[1].split(' ').map(Number); // Signal array
  const mask = lines[2].split(' ').map(Number); // Mask array

  solveProblem(n, m, signal, mask);
});

function solveProblem(n, m, signal, mask) {
  console.log('n:', n, '\nm:', m, '\nSignal:', signal, '\nMask:', mask);
}

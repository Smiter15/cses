// Test with specific test case:
// cat StringAlgorithms/wordCombinations/tests/1.in | node StringAlgorithms/wordCombinations/solution.js

// Test against all test cases with:
// node test StringAlgorithms/wordCombinations

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const target = lines[0]; // The target string
  const k = parseInt(lines[1], 10); // Number of dictionary words
  const dictionary = lines.slice(2); // List of dictionary words

  solveProblem(target, k, dictionary);
});

function solveProblem(target, k, dictionary) {
  console.log('Target:', target);
  console.log('Number of Words:', k);
  console.log('Dictionary:', dictionary.slice(0, 10), '...'); // Display first 10 for brevity
}
